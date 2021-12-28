"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consolid = void 0;

var _icddService = require("./helpers/icdd-service");

// export class Consolid{
//     public fetch;
//     public verbose: boolean = false;
//     public icddService: ICDDService;
//     constructor(fetch: any, verbose: boolean = false){
//         this.fetch = fetch;
//         this.verbose = verbose;
//         this.icddService = new ICDDService(fetch, verbose);
//     }
//     initICDD(rootURL: string, icddName: string, makePublic: boolean = true){
//         return this.icddService.initICDD(rootURL, icddName, makePublic)
//     }
// }
let Consolid;
exports.Consolid = Consolid;

(function (_Consolid) {
  const ICDDService = _Consolid.ICDDService = _icddService.ICDDService;
})(Consolid || (exports.Consolid = Consolid = {}));
//# sourceMappingURL=index.js.map