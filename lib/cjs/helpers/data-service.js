"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataService = void 0;

var _solidClient = require("@inrupt/solid-client");

var _accessService = require("./access-service");

var _BaseDefinitions = require("./BaseDefinitions");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataService = /*#__PURE__*/function () {
  function DataService(fetch) {
    var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, DataService);

    _defineProperty(this, "verbose", false);

    this.fetch = fetch;
    this.verbose = verbose;
    this.accessService = new _accessService.AccessService(fetch);
  }
  /**
   * FILES
   */
  // Upload File to the targetFileURL.
  // If the targetFileURL exists, overwrite the file.
  // If the targetFileURL does not exist, create the file at the location.


  _createClass(DataService, [{
    key: "writeFileToPod",
    value: function () {
      var _writeFileToPod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, targetFileURL) {
        var makePublic,
            contentType,
            savedFile,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                makePublic = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                contentType = _args.length > 3 && _args[3] !== undefined ? _args[3] : _BaseDefinitions.Mimetype.Text;
                _context.next = 4;
                return (0, _solidClient.overwriteFile)(targetFileURL, // URL for the file.
                file, // File
                {
                  contentType: contentType,
                  fetch: this.fetch
                } // mimetype if known, fetch from the authenticated session
                );

              case 4:
                savedFile = _context.sent;
                this.verbose && console.log("File saved at ".concat((0, _solidClient.getSourceUrl)(savedFile)));

                if (!makePublic) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return this.accessService.makeFilePublic(targetFileURL);

              case 9:
                return _context.abrupt("return", savedFile);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function writeFileToPod(_x, _x2) {
        return _writeFileToPod.apply(this, arguments);
      }

      return writeFileToPod;
    }()
  }, {
    key: "getFile",
    value: function () {
      var _getFile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fileURL) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.verbose && console.log("Getting file ".concat(fileURL, "..."));
                return _context2.abrupt("return", (0, _solidClient.getFile)(fileURL, // File in Pod to Read
                {
                  fetch: this.fetch
                } // fetch from authenticated session
                ));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getFile(_x3) {
        return _getFile2.apply(this, arguments);
      }

      return getFile;
    }()
  }, {
    key: "deleteFile",
    value: function () {
      var _deleteFile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(fileURL) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.verbose && console.log("Deleting file ".concat(fileURL, "..."));
                return _context3.abrupt("return", (0, _solidClient.deleteFile)(fileURL, // File in Pod to Read
                {
                  fetch: this.fetch
                } // fetch from authenticated session
                ));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteFile(_x4) {
        return _deleteFile2.apply(this, arguments);
      }

      return deleteFile;
    }()
    /**
     * CONTAINERS
     */

  }, {
    key: "deleteContainer",
    value: function () {
      var _deleteContainer2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(containerURL) {
        var includeSubContainers,
            dataset,
            containerResources,
            _iterator,
            _step,
            resource,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                includeSubContainers = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;

                if (!includeSubContainers) {
                  _context4.next = 31;
                  break;
                }

                console.log("Deleting container ".concat(containerURL, " including its subfolders..."));
                _context4.next = 5;
                return (0, _solidClient.getSolidDataset)(containerURL, {
                  fetch: this.fetch
                });

              case 5:
                dataset = _context4.sent;
                _context4.next = 8;
                return (0, _solidClient.getContainedResourceUrlAll)(dataset);

              case 8:
                containerResources = _context4.sent;
                // Delete resources (containers and files)
                _iterator = _createForOfIteratorHelper(containerResources);
                _context4.prev = 10;

                _iterator.s();

              case 12:
                if ((_step = _iterator.n()).done) {
                  _context4.next = 23;
                  break;
                }

                resource = _step.value;

                if (!(0, _solidClient.isContainer)(resource)) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 17;
                return this.deleteContainer(resource, true);

              case 17:
                _context4.next = 21;
                break;

              case 19:
                _context4.next = 21;
                return this.deleteFile(resource);

              case 21:
                _context4.next = 12;
                break;

              case 23:
                _context4.next = 28;
                break;

              case 25:
                _context4.prev = 25;
                _context4.t0 = _context4["catch"](10);

                _iterator.e(_context4.t0);

              case 28:
                _context4.prev = 28;

                _iterator.f();

                return _context4.finish(28);

              case 31:
                console.log("Deleting container ".concat(containerURL, "..."));
                return _context4.abrupt("return", (0, _solidClient.deleteContainer)(containerURL, {
                  fetch: this.fetch
                }));

              case 33:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[10, 25, 28, 31]]);
      }));

      function deleteContainer(_x5) {
        return _deleteContainer2.apply(this, arguments);
      }

      return deleteContainer;
    }()
  }, {
    key: "createContainer",
    value: function () {
      var _createContainer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(containerURL) {
        var makePublic,
            datasetWithAcl,
            _args5 = arguments;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                makePublic = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;
                this.verbose && console.log("Creating container ".concat(containerURL, "..."));
                _context5.next = 4;
                return (0, _solidClient.createContainerAt)(containerURL, // File in Pod to Read
                {
                  fetch: this.fetch
                } // fetch from authenticated session
                );

              case 4:
                datasetWithAcl = _context5.sent;

                if (!makePublic) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 8;
                return this.accessService.makePublic(containerURL);

              case 8:
                return _context5.abrupt("return", datasetWithAcl);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createContainer(_x6) {
        return _createContainer.apply(this, arguments);
      }

      return createContainer;
    }()
  }]);

  return DataService;
}();

exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map