import { AccessService } from "./access-service";
import { DataService } from "./data-service";
export declare class ICDDService {
    fetch: any;
    verbose: boolean;
    accessService: AccessService;
    dataService: DataService;
    constructor(fetch: any, verbose?: boolean);
    initICDD(rootURL: string, icddName: string, makePublic?: boolean): Promise<string>;
    deleteICDD(icddURL: string): Promise<string>;
    addPayloadDocuments(icddRootURL: string, files: File[], makePublic?: boolean): Promise<string>;
    addPayloadTriples(icddRootURL: string, files: File[], makePublic?: boolean): Promise<string>;
    addOntologyResources(icddRootURL: string, files: File[], makePublic?: boolean): Promise<string>;
    private addFiles;
    private buildIndex;
    private addFileToIndex;
}
//# sourceMappingURL=icdd-service.d.ts.map