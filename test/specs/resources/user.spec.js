"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("user.get()", function () {
  it("It should get", async function () {
    try {
      var response = await bitly.user.get().catch((error) => {
        if (error) {
          console.log("error ", error);
          return;
        }
      });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("user.getPlatformLimits()", function () {
  it("It should get platform limits", async function () {
    var payload = {
      path: "string",
    };

    try {
      var response = await bitly.user
        .getPlatformLimits(payload)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("user.update()", function () {
  it("It should update", async function () {
    var payload = {
      name: "string",
      default_group_guid: "string",
    };

    try {
      var response = await bitly.user.update(payload).catch((error) => {
        if (error) {
          console.log("error ", error);
          return;
        }
      });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});
