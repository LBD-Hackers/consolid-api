/// <reference types="node" />
import { AccessService } from "./access-service";
import { Mimetype } from "./BaseDefinitions";
export declare class DataService {
    fetch: any;
    verbose: boolean;
    accessService: AccessService;
    constructor(fetch: any, verbose?: boolean);
    /**
     * FILES
     */
    writeFileToPod(file: File | Buffer, targetFileURL: string, makePublic?: boolean, contentType?: Mimetype): Promise<(File | Buffer) & import("@inrupt/solid-client").WithResourceInfo>;
    getFile(fileURL: string): Promise<Blob & import("@inrupt/solid-client").WithResourceInfo & {
        internal_resourceInfo: {
            aclUrl?: string;
            linkedResources: import("@inrupt/solid-client/dist/interfaces").LinkedResourceUrlAll;
            permissions?: {
                user: import("@inrupt/solid-client").Access;
                public: import("@inrupt/solid-client").Access;
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
    }> & import("@inrupt/solid-client").WithResourceInfo & {
        internal_resourceInfo: {
            aclUrl?: string;
            linkedResources: import("@inrupt/solid-client/dist/interfaces").LinkedResourceUrlAll;
            permissions?: {
                user: import("@inrupt/solid-client").Access;
                public: import("@inrupt/solid-client").Access;
            };
        };
    }>;
}
//# sourceMappingURL=data-service.d.ts.map