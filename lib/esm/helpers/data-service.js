"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataService = void 0;

var _solidClient = require("@inrupt/solid-client");

var _accessService = require("./access-service");

var _BaseDefinitions = require("./BaseDefinitions");

// Import from "@inrupt/solid-client"
class DataService {
  verbose = false;

  constructor(fetch, verbose = false) {
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


  async writeFileToPod(file, targetFileURL, makePublic = false, contentType = _BaseDefinitions.Mimetype.Text) {
    const savedFile = await (0, _solidClient.overwriteFile)(targetFileURL, // URL for the file.
    file, // File
    {
      contentType,
      fetch: this.fetch
    } // mimetype if known, fetch from the authenticated session
    );
    this.verbose && console.log(`File saved at ${(0, _solidClient.getSourceUrl)(savedFile)}`);

    if (makePublic) {
      await this.accessService.makeFilePublic(targetFileURL);
    }

    return savedFile;
  }

  async getFile(fileURL) {
    this.verbose && console.log(`Getting file ${fileURL}...`);
    return (0, _solidClient.getFile)(fileURL, // File in Pod to Read
    {
      fetch: this.fetch
    } // fetch from authenticated session
    );
  }

  async deleteFile(fileURL) {
    this.verbose && console.log(`Deleting file ${fileURL}...`);
    return (0, _solidClient.deleteFile)(fileURL, // File in Pod to Read
    {
      fetch: this.fetch
    } // fetch from authenticated session
    );
  }
  /**
   * CONTAINERS
   */


  async deleteContainer(containerURL, includeSubContainers = true) {
    // If deleting subcontainers, we need to first get these
    if (includeSubContainers) {
      console.log(`Deleting container ${containerURL} including its subfolders...`);
      const dataset = await (0, _solidClient.getSolidDataset)(containerURL, {
        fetch: this.fetch
      });
      const containerResources = await (0, _solidClient.getContainedResourceUrlAll)(dataset); // Delete resources (containers and files)

      for (let resource of containerResources) {
        if ((0, _solidClient.isContainer)(resource)) {
          await this.deleteContainer(resource, true);
        } else {
          await this.deleteFile(resource);
        }
      }
    }

    console.log(`Deleting container ${containerURL}...`);
    return (0, _solidClient.deleteContainer)(containerURL, {
      fetch: this.fetch
    });
  }

  async createContainer(containerURL, makePublic = false) {
    this.verbose && console.log(`Creating container ${containerURL}...`);
    const datasetWithAcl = await (0, _solidClient.createContainerAt)(containerURL, // File in Pod to Read
    {
      fetch: this.fetch
    } // fetch from authenticated session
    );

    if (makePublic) {
      await this.accessService.makePublic(containerURL);
    }

    return datasetWithAcl;
  }

}

exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map