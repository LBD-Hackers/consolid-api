"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICDDService = void 0;

var _accessService = require("./access-service");

var _urlJoinTs = require("url-join-ts");

var _dataService = require("./data-service");

var _utils = require("./utils");

var _solidClient = require("@inrupt/solid-client");

var _vocabCommonRdf = require("@inrupt/vocab-common-rdf");

var _icddC = _interopRequireDefault(require("./vocab/icdd-c"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import from "@inrupt/solid-client"
class ICDDService {
  verbose = false;

  constructor(fetch, verbose = false) {
    this.fetch = fetch;
    this.verbose = verbose;
    this.accessService = new _accessService.AccessService(fetch);
    this.dataService = new _dataService.DataService(fetch);
  }

  async initICDD(rootURL, icddName, makePublic = false) {
    // Create main folder
    const baseURL = (0, _urlJoinTs.urlJoin)(rootURL, encodeURIComponent(icddName), "/"); // Might fail if folders already exist

    this.verbose && console.time(`Created root container for ICDD...`);

    try {
      await this.dataService.createContainer(baseURL, makePublic);
    } catch (err) {
      this.verbose && console.log(`Could not create container ${baseURL}`);
      throw err;
    }

    this.verbose && console.timeEnd(`Created root container for ICDD...`); // Create subfolders

    this.verbose && console.time(`Created ICDD subfolders...`);
    let folderURLs = ["ontology_resources", "payload_triples", "payload_documents"].map(f => (0, _urlJoinTs.urlJoin)(rootURL, icddName, f, "/"));
    let createFolderPromises = [];
    folderURLs.forEach(url => {
      createFolderPromises.push(this.dataService.createContainer(url, makePublic));
    });
    this.verbose && console.timeEnd(`Created ICDD subfolders...`); // Might fail if folders already exist

    try {
      await Promise.all(createFolderPromises);
    } catch (err) {
      console.log(`Could not create sub-containers`);
      throw err;
    } // Add index.rdf
    // Might fail if folders already exist


    this.verbose && console.time(`Created index.rdf...`);

    try {
      await this.buildIndex(baseURL, icddName, makePublic);
    } catch (err) {
      console.log(`Could not create index-file`);
      throw err;
    }

    this.verbose && console.timeEnd(`Created index.rdf...`);
    return "DONE";
  }

  async deleteICDD(icddURL) {
    await this.dataService.deleteContainer(icddURL);
    return "DONE";
  }

  async addPayloadDocuments(icddRootURL, files, makePublic = false) {
    return this.addFiles(icddRootURL, "payload_documents", files, makePublic);
  }

  async addPayloadTriples(icddRootURL, files, makePublic = false) {
    return this.addFiles(icddRootURL, "payload_triples", files, makePublic);
  }

  async addOntologyResources(icddRootURL, files, makePublic = false) {
    return this.addFiles(icddRootURL, "ontology_resources", files, makePublic);
  }

  async addFiles(icddRootURL, subfolder, files, makePublic = false) {
    const containerURL = (0, _urlJoinTs.urlJoin)(icddRootURL, subfolder, "/"); // 1. Calculate md5 hashes of files

    const md5Promises = [];
    files.forEach(file => md5Promises.push((0, _utils.computeChecksumMd5)(file)));
    const md5Hashes = await Promise.all(md5Promises); // 2. Upload the files and append them to index file while doing so

    let uploadFilePromises = [];
    files.forEach((file, i) => {
      const fileExtension = file.name.split('.').pop() || "txt";
      const fileName = `${md5Hashes[i]}.${fileExtension}`; // Append file to index.rdf

      uploadFilePromises.push(this.addFileToIndex(icddRootURL, fileName, fileExtension, subfolder)); // Upload file to payload_documents

      const fileURL = (0, _urlJoinTs.urlJoin)(containerURL, fileName);
      uploadFilePromises.push(this.dataService.writeFileToPod(file, fileURL, makePublic));
    });
    await Promise.all(uploadFilePromises);
    return "DONE";
  }

  async buildIndex(rootURL, icddName, makePublic = true) {
    let indexDataset = (0, _solidClient.createSolidDataset)(); // Create container description
    // Use various add functions to add properties to the Thing
    // Note: solid-client functions do not modify objects passed in as arguments. 
    // Instead the functions return new objects with the modifications.

    const now = new Date();
    const containerDescription = (0, _solidClient.buildThing)((0, _solidClient.createThing)()) // Build new resource (ID created by SDK)
    .addUrl(_vocabCommonRdf.RDF.type, _icddC.default.ContainerDescription) // Define type
    .addStringNoLocale(_vocabCommonRdf.SCHEMA_INRUPT.name, icddName) // Define name
    .addDatetime(_icddC.default.creationDate, now) // Set creation date
    .addDatetime(_icddC.default.modificationDate, now) // Set modification date
    .build(); // Update SolidDataset with the containerDescription Thing.
    // Note: solid-client functions do not modify objects passed in as arguments. 
    // Instead the functions return new objects with the modifications.

    indexDataset = (0, _solidClient.setThing)(indexDataset, containerDescription); // Save the SolidDataset at the specified URL.
    // The function returns a SolidDataset that reflects your sent data

    const datasetWithAcl = await (0, _solidClient.saveSolidDatasetAt)((0, _urlJoinTs.urlJoin)(rootURL, "index"), indexDataset, {
      fetch: this.fetch
    });

    if (makePublic) {
      await this.accessService.makePublic((0, _urlJoinTs.urlJoin)(rootURL, "index"));
    }

    return datasetWithAcl;
  }

  async addFileToIndex(icddRootURL, fileName, format, subfolder) {
    const now = new Date();
    const filePath = `/${subfolder}/${fileName}`; // Get dataset

    let indexDataset = await (0, _solidClient.getSolidDataset)((0, _urlJoinTs.urlJoin)(icddRootURL, "index"), {
      fetch: this.fetch
    }); // Add document

    const newDocument = (0, _solidClient.buildThing)((0, _solidClient.createThing)()) // Build new resource (ID created by SDK)
    .addUrl(_vocabCommonRdf.RDF.type, _icddC.default.Document) // Define type
    .addStringNoLocale(_icddC.default.format, format) // Set format
    .addStringNoLocale(_icddC.default.filename, fileName) // Set file name
    .addStringNoLocale(_vocabCommonRdf.DCAT.downloadURL, filePath) // Set file path (Why is relative URI not supported?)
    .addDatetime(_icddC.default.creationDate, now) // Set creation date
    .addDatetime(_icddC.default.modificationDate, now) // Set modification date
    .build();
    indexDataset = (0, _solidClient.setThing)(indexDataset, newDocument); // Get container description

    let containerDescription = (0, _solidClient.getThingAll)(indexDataset).find(item => {
      return (0, _solidClient.getUrlAll)(item, _vocabCommonRdf.RDF.type).indexOf(_icddC.default.ContainerDescription) != -1;
    }); // Make changes to container description

    if (containerDescription != undefined) {
      // Update modification date
      containerDescription = (0, _solidClient.setDatetime)(containerDescription, _icddC.default.modificationDate, now); // Add reference to new document

      containerDescription = (0, _solidClient.addUrl)(containerDescription, _icddC.default.containsDocument, newDocument); // Update dataset

      indexDataset = (0, _solidClient.setThing)(indexDataset, containerDescription);
    } // Save the SolidDataset at the specified URL.
    // The function returns a SolidDataset that reflects your sent data


    const datasetWithAcl = await (0, _solidClient.saveSolidDatasetAt)((0, _urlJoinTs.urlJoin)(icddRootURL, "index"), indexDataset, {
      fetch: this.fetch
    });
    return datasetWithAcl;
  }

}

exports.ICDDService = ICDDService;
//# sourceMappingURL=icdd-service.js.map