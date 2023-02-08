"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("organizations.get()", function () {
  it("It should get", async function () {
    var organization_guid = "string";

    try {
      var response = await bitly.organizations
        .get(organization_guid)
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

describe("organizations.getPlanLimits()", function () {
  it("It should get plan limits", async function () {
    var organization_guid = "string";
    try {
      var response = await bitly.organizations
        .getPlanLimits(organization_guid)
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

describe("organizations.getShortenCounts()", function () {
  it("It should get shorten counts", async function () {
    var organization_guid = "string";

    var payload = {
      unit: "string",
      units: "number",
      unit_reference: "string",
    };

    try {
      var response = await bitly.organizations
        .getShortenCounts(organization_guid, payload)
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

describe("organizations.list()", function () {
  it("It should list", async function () {
    try {
      var response = await bitly.organizations.list().catch((error) => {
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
