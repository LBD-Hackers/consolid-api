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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICDDService = /*#__PURE__*/function () {
  function ICDDService(fetch) {
    var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, ICDDService);

    _defineProperty(this, "verbose", false);

    this.fetch = fetch;
    this.verbose = verbose;
    this.accessService = new _accessService.AccessService(fetch);
    this.dataService = new _dataService.DataService(fetch);
  }

  _createClass(ICDDService, [{
    key: "initICDD",
    value: function () {
      var _initICDD = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rootURL, icddName) {
        var _this = this;

        var makePublic,
            baseURL,
            folderURLs,
            createFolderPromises,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                makePublic = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                // Create main folder
                baseURL = (0, _urlJoinTs.urlJoin)(rootURL, encodeURIComponent(icddName), "/"); // Might fail if folders already exist

                this.verbose && console.time("Created root container for ICDD...");
                _context.prev = 3;
                _context.next = 6;
                return this.dataService.createContainer(baseURL, makePublic);

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                this.verbose && console.log("Could not create container ".concat(baseURL));
                throw _context.t0;

              case 12:
                this.verbose && console.timeEnd("Created root container for ICDD..."); // Create subfolders

                this.verbose && console.time("Created ICDD subfolders...");
                folderURLs = ["ontology_resources", "payload_triples", "payload_documents"].map(function (f) {
                  return (0, _urlJoinTs.urlJoin)(rootURL, icddName, f, "/");
                });
                createFolderPromises = [];
                folderURLs.forEach(function (url) {
                  createFolderPromises.push(_this.dataService.createContainer(url, makePublic));
                });
                this.verbose && console.timeEnd("Created ICDD subfolders..."); // Might fail if folders already exist

                _context.prev = 18;
                _context.next = 21;
                return Promise.all(createFolderPromises);

              case 21:
                _context.next = 27;
                break;

              case 23:
                _context.prev = 23;
                _context.t1 = _context["catch"](18);
                console.log("Could not create sub-containers");
                throw _context.t1;

              case 27:
                // Add index.rdf
                // Might fail if folders already exist
                this.verbose && console.time("Created index.rdf...");
                _context.prev = 28;
                _context.next = 31;
                return this.buildIndex(baseURL, icddName, makePublic);

              case 31:
                _context.next = 37;
                break;

              case 33:
                _context.prev = 33;
                _context.t2 = _context["catch"](28);
                console.log("Could not create index-file");
                throw _context.t2;

              case 37:
                this.verbose && console.timeEnd("Created index.rdf...");
                return _context.abrupt("return", "DONE");

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8], [18, 23], [28, 33]]);
      }));

      function initICDD(_x, _x2) {
        return _initICDD.apply(this, arguments);
      }

      return initICDD;
    }()
  }, {
    key: "deleteICDD",
    value: function () {
      var _deleteICDD = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(icddURL) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.dataService.deleteContainer(icddURL);

              case 2:
                return _context2.abrupt("return", "DONE");

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteICDD(_x3) {
        return _deleteICDD.apply(this, arguments);
      }

      return deleteICDD;
    }()
  }, {
    key: "addPayloadDocuments",
    value: function () {
      var _addPayloadDocuments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(icddRootURL, files) {
        var makePublic,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                makePublic = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;
                return _context3.abrupt("return", this.addFiles(icddRootURL, "payload_documents", files, makePublic));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addPayloadDocuments(_x4, _x5) {
        return _addPayloadDocuments.apply(this, arguments);
      }

      return addPayloadDocuments;
    }()
  }, {
    key: "addPayloadTriples",
    value: function () {
      var _addPayloadTriples = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(icddRootURL, files) {
        var makePublic,
            _args4 = arguments;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                makePublic = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : false;
                return _context4.abrupt("return", this.addFiles(icddRootURL, "payload_triples", files, makePublic));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function addPayloadTriples(_x6, _x7) {
        return _addPayloadTriples.apply(this, arguments);
      }

      return addPayloadTriples;
    }()
  }, {
    key: "addOntologyResources",
    value: function () {
      var _addOntologyResources = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(icddRootURL, files) {
        var makePublic,
            _args5 = arguments;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                makePublic = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : false;
                return _context5.abrupt("return", this.addFiles(icddRootURL, "ontology_resources", files, makePublic));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function addOntologyResources(_x8, _x9) {
        return _addOntologyResources.apply(this, arguments);
      }

      return addOntologyResources;
    }()
  }, {
    key: "addFiles",
    value: function () {
      var _addFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(icddRootURL, subfolder, files) {
        var _this2 = this;

        var makePublic,
            containerURL,
            md5Promises,
            md5Hashes,
            uploadFilePromises,
            _args6 = arguments;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                makePublic = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
                containerURL = (0, _urlJoinTs.urlJoin)(icddRootURL, subfolder, "/"); // 1. Calculate md5 hashes of files

                md5Promises = [];
                files.forEach(function (file) {
                  return md5Promises.push((0, _utils.computeChecksumMd5)(file));
                });
                _context6.next = 6;
                return Promise.all(md5Promises);

              case 6:
                md5Hashes = _context6.sent;
                // 2. Upload the files and append them to index file while doing so
                uploadFilePromises = [];
                files.forEach(function (file, i) {
                  var fileExtension = file.name.split('.').pop() || "txt";
                  var fileName = "".concat(md5Hashes[i], ".").concat(fileExtension); // Append file to index.rdf

                  uploadFilePromises.push(_this2.addFileToIndex(icddRootURL, fileName, fileExtension, subfolder)); // Upload file to payload_documents

                  var fileURL = (0, _urlJoinTs.urlJoin)(containerURL, fileName);
                  uploadFilePromises.push(_this2.dataService.writeFileToPod(file, fileURL, makePublic));
                });
                _context6.next = 11;
                return Promise.all(uploadFilePromises);

              case 11:
                return _context6.abrupt("return", "DONE");

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function addFiles(_x10, _x11, _x12) {
        return _addFiles.apply(this, arguments);
      }

      return addFiles;
    }()
  }, {
    key: "buildIndex",
    value: function () {
      var _buildIndex = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(rootURL, icddName) {
        var makePublic,
            indexDataset,
            now,
            containerDescription,
            datasetWithAcl,
            _args7 = arguments;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                makePublic = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : true;
                indexDataset = (0, _solidClient.createSolidDataset)(); // Create container description
                // Use various add functions to add properties to the Thing
                // Note: solid-client functions do not modify objects passed in as arguments. 
                // Instead the functions return new objects with the modifications.

                now = new Date();
                containerDescription = (0, _solidClient.buildThing)((0, _solidClient.createThing)()) // Build new resource (ID created by SDK)
                .addUrl(_vocabCommonRdf.RDF.type, _icddC["default"].ContainerDescription) // Define type
                .addStringNoLocale(_vocabCommonRdf.SCHEMA_INRUPT.name, icddName) // Define name
                .addDatetime(_icddC["default"].creationDate, now) // Set creation date
                .addDatetime(_icddC["default"].modificationDate, now) // Set modification date
                .build(); // Update SolidDataset with the containerDescription Thing.
                // Note: solid-client functions do not modify objects passed in as arguments. 
                // Instead the functions return new objects with the modifications.

                indexDataset = (0, _solidClient.setThing)(indexDataset, containerDescription); // Save the SolidDataset at the specified URL.
                // The function returns a SolidDataset that reflects your sent data

                _context7.next = 7;
                return (0, _solidClient.saveSolidDatasetAt)((0, _urlJoinTs.urlJoin)(rootURL, "index"), indexDataset, {
                  fetch: this.fetch
                });

              case 7:
                datasetWithAcl = _context7.sent;

                if (!makePublic) {
                  _context7.next = 11;
                  break;
                }

                _context7.next = 11;
                return this.accessService.makePublic((0, _urlJoinTs.urlJoin)(rootURL, "index"));

              case 11:
                return _context7.abrupt("return", datasetWithAcl);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function buildIndex(_x13, _x14) {
        return _buildIndex.apply(this, arguments);
      }

      return buildIndex;
    }()
  }, {
    key: "addFileToIndex",
    value: function () {
      var _addFileToIndex = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(icddRootURL, fileName, format, subfolder) {
        var now, filePath, indexDataset, newDocument, containerDescription, datasetWithAcl;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                now = new Date();
                filePath = "/".concat(subfolder, "/").concat(fileName); // Get dataset

                _context8.next = 4;
                return (0, _solidClient.getSolidDataset)((0, _urlJoinTs.urlJoin)(icddRootURL, "index"), {
                  fetch: this.fetch
                });

              case 4:
                indexDataset = _context8.sent;
                // Add document
                newDocument = (0, _solidClient.buildThing)((0, _solidClient.createThing)()) // Build new resource (ID created by SDK)
                .addUrl(_vocabCommonRdf.RDF.type, _icddC["default"].Document) // Define type
                .addStringNoLocale(_icddC["default"].format, format) // Set format
                .addStringNoLocale(_icddC["default"].filename, fileName) // Set file name
                .addStringNoLocale(_vocabCommonRdf.DCAT.downloadURL, filePath) // Set file path (Why is relative URI not supported?)
                .addDatetime(_icddC["default"].creationDate, now) // Set creation date
                .addDatetime(_icddC["default"].modificationDate, now) // Set modification date
                .build();
                indexDataset = (0, _solidClient.setThing)(indexDataset, newDocument); // Get container description

                containerDescription = (0, _solidClient.getThingAll)(indexDataset).find(function (item) {
                  return (0, _solidClient.getUrlAll)(item, _vocabCommonRdf.RDF.type).indexOf(_icddC["default"].ContainerDescription) != -1;
                }); // Make changes to container description

                if (containerDescription != undefined) {
                  // Update modification date
                  containerDescription = (0, _solidClient.setDatetime)(containerDescription, _icddC["default"].modificationDate, now); // Add reference to new document

                  containerDescription = (0, _solidClient.addUrl)(containerDescription, _icddC["default"].containsDocument, newDocument); // Update dataset

                  indexDataset = (0, _solidClient.setThing)(indexDataset, containerDescription);
                } // Save the SolidDataset at the specified URL.
                // The function returns a SolidDataset that reflects your sent data


                _context8.next = 11;
                return (0, _solidClient.saveSolidDatasetAt)((0, _urlJoinTs.urlJoin)(icddRootURL, "index"), indexDataset, {
                  fetch: this.fetch
                });

              case 11:
                datasetWithAcl = _context8.sent;
                return _context8.abrupt("return", datasetWithAcl);

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function addFileToIndex(_x15, _x16, _x17, _x18) {
        return _addFileToIndex.apply(this, arguments);
      }

      return addFileToIndex;
    }()
  }]);

  return ICDDService;
}();

exports.ICDDService = ICDDService;
//# sourceMappingURL=icdd-service.js.map