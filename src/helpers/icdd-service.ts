import { AccessService } from "./access-service";
import { urlJoin } from 'url-join-ts';
import { DataService } from "./data-service";
import { computeChecksumMd5 } from './utils';

// Import from "@inrupt/solid-client"
import {
    createSolidDataset,
    buildThing,
    getSolidDataset,
    createThing,
    setThing,
    setUrl,
    addUrl,
    getThingAll,
    getUrlAll,
    setDatetime,
    saveSolidDatasetAt
} from "@inrupt/solid-client";

import { RDF, SCHEMA_INRUPT, DCAT } from '@inrupt/vocab-common-rdf';
import ICDD_C from './vocab/icdd-c';

export class ICDDService{

    public fetch;
    public verbose: boolean = false;
    public accessService: AccessService;
    public dataService: DataService;

    constructor(fetch: any, verbose: boolean = false){
        this.fetch = fetch;
        this.verbose = verbose;
        this.accessService = new AccessService(fetch);
        this.dataService = new DataService(fetch);
    }

    public async initICDD(rootURL: string, icddName: string, makePublic: boolean = false){

        // Create main folder
        const baseURL = urlJoin(rootURL, encodeURIComponent(icddName), "/");
    
        // Might fail if folders already exist
        this.verbose && console.time(`Created root container for ICDD...`);
        try{
          await this.dataService.createContainer(baseURL, makePublic);
        }catch(err){
          this.verbose && console.log(`Could not create container ${baseURL}`);
          throw err;
        }
        this.verbose && console.timeEnd(`Created root container for ICDD...`);
        
        // Create subfolders
        this.verbose && console.time(`Created ICDD subfolders...`);
        let folderURLs = ["ontology_resources", "payload_triples", "payload_documents"].map(f => urlJoin(rootURL, icddName, f, "/"));
    
        let createFolderPromises: Promise<any>[] = [];
        folderURLs.forEach(url => {
          createFolderPromises.push(this.dataService.createContainer(url, makePublic));
        });
        this.verbose && console.timeEnd(`Created ICDD subfolders...`);
    
        // Might fail if folders already exist
        try{
          await Promise.all(createFolderPromises);
        }catch(err){
          console.log(`Could not create sub-containers`);
          throw err;
        }
    
        // Add index.rdf
        // Might fail if folders already exist
        this.verbose && console.time(`Created index.rdf...`);
        try{
            await this.buildIndex(baseURL, icddName, makePublic);
        }catch(err){
            console.log(`Could not create index-file`);
            throw err;
        }
        this.verbose && console.timeEnd(`Created index.rdf...`);
    
        return "DONE";
    
    }

    public async deleteICDD(icddURL: string): Promise<string>{
        await this.dataService.deleteContainer(icddURL);
        return "DONE";
    }

    public async addPayloadDocuments(icddRootURL: string, files: File[], makePublic: boolean = false){
        return this.addFiles(icddRootURL, "payload_documents", files, makePublic);
    }

    public async addPayloadTriples(icddRootURL: string, files: File[], makePublic: boolean = false){
        return this.addFiles(icddRootURL, "payload_triples", files, makePublic);
    }

    public async addOntologyResources(icddRootURL: string, files: File[], makePublic: boolean = false){
        return this.addFiles(icddRootURL, "ontology_resources", files, makePublic);
    }

    private async addFiles(icddRootURL: string, subfolder: string, files: File[], makePublic: boolean = false){

        const containerURL = urlJoin(icddRootURL, subfolder, "/");

        // 1. Calculate md5 hashes of files
        const md5Promises: any = [];
        files.forEach((file: File) => md5Promises.push(computeChecksumMd5(file)));
        const md5Hashes = await Promise.all(md5Promises);

        // 2. Upload the files and append them to index file while doing so
        let uploadFilePromises: any[] = [];
        files.forEach((file, i) => {
            const fileExtension = file.name.split('.').pop() || "txt";
            const fileName = `${md5Hashes[i]}.${fileExtension}`;

            // Append file to index.rdf
            uploadFilePromises.push(this.addFileToIndex(icddRootURL, fileName, fileExtension, subfolder))

            // Upload file to payload_documents
            const fileURL = urlJoin(containerURL, fileName);
            uploadFilePromises.push(this.dataService.writeFileToPod(file, fileURL, makePublic));
        })
        await Promise.all(uploadFilePromises);

        return "DONE";

    }

    private async buildIndex(rootURL: string, icddName: string, makePublic: boolean = true){

        let indexDataset = createSolidDataset();

        // Create container description
        // Use various add functions to add properties to the Thing
        // Note: solid-client functions do not modify objects passed in as arguments. 
        // Instead the functions return new objects with the modifications.
        const now = new Date();
        const containerDescription = buildThing(createThing())      // Build new resource (ID created by SDK)
            .addUrl(RDF.type, ICDD_C.ContainerDescription)          // Define type
            .addStringNoLocale(SCHEMA_INRUPT.name, icddName)        // Define name
            .addDatetime(ICDD_C.creationDate, now)                  // Set creation date
            .addDatetime(ICDD_C.modificationDate, now)              // Set modification date
            .build();
        
        // Update SolidDataset with the containerDescription Thing.
        // Note: solid-client functions do not modify objects passed in as arguments. 
        // Instead the functions return new objects with the modifications.
        indexDataset = setThing(indexDataset, containerDescription);
        
        // Save the SolidDataset at the specified URL.
        // The function returns a SolidDataset that reflects your sent data
        const datasetWithAcl = await saveSolidDatasetAt(
            urlJoin(rootURL, "index"),
            indexDataset,
            { fetch: this.fetch }
        );

        if(makePublic){
            await this.accessService.makePublic(urlJoin(rootURL, "index"));
        }

        return datasetWithAcl;
        

    }

    private async addFileToIndex(icddRootURL: string, fileName: string, format: string, subfolder: string){

        const now = new Date();
        const filePath = `/${subfolder}/${fileName}`;

        // Get dataset
        let indexDataset = await getSolidDataset(
            urlJoin(icddRootURL, "index"),
            { fetch: this.fetch }
        );

        // Add document
        const newDocument = buildThing(createThing())               // Build new resource (ID created by SDK)
            .addUrl(RDF.type, ICDD_C.Document)                      // Define type
            .addStringNoLocale(ICDD_C.format, format)               // Set format
            .addStringNoLocale(ICDD_C.filename, fileName)           // Set file name
            .addStringNoLocale(DCAT.downloadURL, filePath)          // Set file path (Why is relative URI not supported?)
            .addDatetime(ICDD_C.creationDate, now)                  // Set creation date
            .addDatetime(ICDD_C.modificationDate, now)              // Set modification date
            .build();
        
        indexDataset = setThing(indexDataset, newDocument);

        // Get container description
        let containerDescription = getThingAll(indexDataset).find(item => {
            return getUrlAll(item, RDF.type).indexOf(ICDD_C.ContainerDescription) != -1;
        });

        // Make changes to container description
        if(containerDescription != undefined){
            // Update modification date
            containerDescription = setDatetime(containerDescription, ICDD_C.modificationDate, now);

            // Add reference to new document
            containerDescription = addUrl(containerDescription, ICDD_C.containsDocument, newDocument);

            // Update dataset
            indexDataset = setThing(indexDataset, containerDescription);
        }

        // Save the SolidDataset at the specified URL.
        // The function returns a SolidDataset that reflects your sent data
        const datasetWithAcl = await saveSolidDatasetAt(
            urlJoin(icddRootURL, "index"),
            indexDataset,
            { fetch: this.fetch }
        );

        return datasetWithAcl;
    }

}