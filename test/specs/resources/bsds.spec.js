"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("bsds.getGroupOverrids()", function () {
  it("It should get group overrids", async function () {
    var group_guid = "string";
    var payload = {
      group_guid: ["array"],
      created_after: "number",
      limit: "number",
      offset: "number",
      bsd: ["array"],
    };

    try {
      var response = await bitly.bsds
        .getGroupOverrids(group_guid, payload)
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

describe("bsds.list()", function () {
  it("It should list", async function () {
    try {
      var response = await bitly.bsds.list().catch((error) => {
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
