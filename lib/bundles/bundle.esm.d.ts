/// <reference types="node" />
import * as _inrupt_solid_client from '@inrupt/solid-client';
import * as _inrupt_solid_client_dist_interfaces from '@inrupt/solid-client/dist/interfaces';

declare class AccessRights {
    read: boolean;
    append: boolean;
    write: boolean;
    control: boolean;
}
declare enum ResourceType {
    FILE = "file",
    DATASET = "dataset",
    CONTAINER = "container"
}
declare enum Mimetype {
    NTriples = "application/n-triples",
    Turtle = "text/turtle",
    NQuads = "application/n-quads",
    Trig = "application/trig",
    SPARQLJSON = "application/sparql-results+json",
    JSONLD = "application/ld+json",
    DLOG = "application/x.datalog",
    Text = "text/plain"
}

declare class AccessService {
    fetch: any;
    verbose: boolean;
    constructor(fetch: any, verbose?: boolean);
    makePublic(resourceURL: string): Promise<Readonly<{
        type: "Dataset";
        graphs: Readonly<Record<string, Readonly<Record<string, Readonly<{
            type: "Subject";
            url: string;
            predicates: Readonly<Record<string, Readonly<Partial<{
                literals: Readonly<Record<string, readonly string[]>>;
                langStrings: Readonly<Record<string, readonly string[]>>;
                namedNodes: readonly string[];
                blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[];
            }>>>>;
        }>>>> & {
            default: Readonly<Record<string, Readonly<{
                type: "Subject";
                url: string;
                predicates: Readonly<Record<string, Readonly<Partial<{
                    literals: Readonly<Record<string, readonly string[]>>;
                    langStrings: Readonly<Record<string, readonly string[]>>;
                    namedNodes: readonly string[];
                    blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[];
                }>>>>;
            }>>>;
        }>;
    }> & _inrupt_solid_client.WithResourceInfo & {
        internal_accessTo: string;
    }>;
    makeFilePublic(resourceURL: string): Promise<Readonly<{
        type: "Dataset";
        graphs: Readonly<Record<string, Readonly<Record<string, Readonly<{
            type: "Subject";
            url: string;
            predicates: Readonly<Record<string, Readonly<Partial<{
                literals: Readonly<Record<string, readonly string[]>>;
                langStrings: Readonly<Record<string, readonly string[]>>;
                namedNodes: readonly string[];
                blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[];
            }>>>>;
        }>>>> & {
            default: Readonly<Record<string, Readonly<{
                type: "Subject";
                url: string;
                predicates: Readonly<Record<string, Readonly<Partial<{
                    literals: Readonly<Record<string, readonly string[]>>;
                    langStrings: Readonly<Record<string, readonly string[]>>;
                    namedNodes: readonly string[];
                    blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[];
                }>>>>;
            }>>>;
        }>;
    }> & _inrupt_solid_client.WithResourceInfo & {
        internal_accessTo: string;
    }>;
    setResourceAccess(resourceURL: string, accessRights: AccessRights, type: ResourceType, userWebID?: string): Promise<Readonly<{
        type: "Dataset";
        graphs: Readonly<Record<string, Readonly<Record<string, Readonly<{
            type: "Subject";
            url: string;
            predicates: Readonly<Record<string, Readonly<Partial<{
                literals: Readonly<Record<string, readonly string[]>>;
                langStrings: Readonly<Record<string, readonly string[]>>;
                namedNodes: readonly string[];
                blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[];
            }>>>>;
        }>>>> & {
            default: Readonly<Record<string, Readonly<{
                type: "Subject";
                url: string;
                predicates: Readonly<Record<string, Readonly<Partial<{
                    literals: Readonly<Record<string, readonly string[]>>;
                    langStrings: Readonly<Record<string, readonly string[]>>;
                    namedNodes: readonly string[];
                    blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[];
                }>>>>;
            }>>>;
        }>;
    }> & _inrupt_solid_client.WithResourceInfo & {
        internal_accessTo: string;
    }>;
    private getResourceAcl;
    private logAccessInfo;
}

declare class DataService {
    fetch: any;
    verbose: boolean;
    accessService: AccessService;
    constructor(fetch: any, verbose?: boolean);
    /**
     * FILES
     */
    writeFileToPod(file: File | Buffer, targetFileURL: string, makePublic?: boolean, contentType?: Mimetype): Promise<(File | Buffer) & _inrupt_solid_client.WithResourceInfo>;
    getFile(fileURL: string): Promise<Blob & _inrupt_solid_client.WithResourceInfo & {
        internal_resourceInfo: {
            aclUrl?: string;
            linkedResources: _inrupt_solid_client_dist_interfaces.LinkedResourceUrlAll;
            permissions?: {
                user: _inrupt_solid_client.Access;
                public: _inrupt_solid_client.Access;
            };
        };
    }>;
    deleteFile(fileURL: string): Promise<void>;
    /**
     * CONTAINERS
     */
    deleteContainer(containerURL: string, includeSubContainers?: boolean): Promise<void>;
    createContainer(containerURL: string, makePublic?: boolean): Promise<Readonly<{
        type: "Dataset";
        graphs: Readonly<Record<string, Readonly<Record<string, Readonly<{
            type: "Subject";
            url: string;
            predicates: Readonly<Record<string, Readonly<Partial<{
                literals: Readonly<Record<string, readonly string[]>>;
                langStrings: Readonly<Record<string, readonly string[]>>;
                namedNodes: readonly string[];
                blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[]; /**
                 * CONTAINERS
                 */
            }>>>>;
        }>>>> & {
            default: Readonly<Record<string, Readonly<{
                type: "Subject";
                url: string;
                predicates: Readonly<Record<string, Readonly<Partial<{
                    literals: Readonly<Record<string, readonly string[]>>;
                    langStrings: Readonly<Record<string, readonly string[]>>;
                    namedNodes: readonly string[];
                    blankNodes: readonly (`_:${string}` | Readonly<Record<string, Readonly<Partial<any>>>>)[]; /**
                     * CONTAINERS
                     */
                }>>>>;
            }>>>;
        }>;
    }> & _inrupt_solid_client.WithResourceInfo & {
        internal_resourceInfo: {
            aclUrl?: string;
            linkedResources: _inrupt_solid_client_dist_interfaces.LinkedResourceUrlAll;
            permissions?: {
                user: _inrupt_solid_client.Access;
                public: _inrupt_solid_client.Access;
            };
        };
    }>;
}

declare class ICDDService {
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

declare namespace Consolid {
    const ICDDService: typeof ICDDService;
}

export { Consolid };
