import { Consolid } from "../src";
import { Session } from '@inrupt/solid-client-authn-node';
import * as path from "path";
import { ICDDService } from "../src/helpers/icdd-service";
import { createReadStream, readFileSync } from "fs";
import * as FileAPI from "file-api";
import {loginCredentials} from '../credentials';

const testFilePath = path.join(__dirname, "./artifacts/Duplex.ifc");
const testFile = new FileAPI.File({
    name: "Duplex6.ifc",
    type: "application/x-step",
    path: testFilePath
});

const mockBlob = new Blob(["mock blob data"], { type: "binary" });

// const testFile = new FileAPI.File({ 
//     name: "abc-song.txt",   // required
//     type: "text/plain",     // optional
//     buffer: new Buffer("abcdefg,hijklmnop, qrs, tuv, double-u, x, y and z")
// });

// const testFile = new File(["foo"], "foo.txt", {
//     type: "text/plain",
// });

// See readme for how to retrieve this!


let session: Session;
let icdd: ICDDService;

beforeAll(async () => {
    session = new Session();
    await session.login(loginCredentials);
    if(!session.info.isLoggedIn) console.error("Please get login credentials with npx @inrupt/generate-oidc-token before running tests!");
    icdd = new Consolid.ICDDService(session.fetch);
})

describe('Auth', () => {

    test('is loggedin', () => {
        expect(session.info.isLoggedIn).toBe(true);
    })

    test('can initialize an ICDD container', async () => {

        const rootURL = "http://localhost:3000/test/";
        const icddName = "test-icdd";

        const icddRes = await icdd.initICDD(rootURL, icddName, true);
        
        expect(icddRes).toBe("DONE");

    });

    // test('can add a file to ICDD container', async () => {

    //     const icddRootURL = "http://localhost:3000/test/test-icdd/";

    //     console.log(testFile);

    //     const icddRes = await icdd.addPayloadDocuments(icddRootURL, [testFile], true);
        
    //     expect(icddRes).toBe("DONE");

    // });

});

function stream2buffer(stream): Promise<any>{

    return new Promise((resolve, reject) => {
        
        const _buf = [];

        stream.on("data", (chunk) => _buf.push(chunk));
        stream.on("end", () => resolve(Buffer.concat(_buf)));
        stream.on("error", (err) => reject(err));

    });
} 