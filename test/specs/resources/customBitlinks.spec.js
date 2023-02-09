"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("customBitlinks.add()", function () {
  it("It should add", async function () {
    var payload = {
      custom_bitlink: "https://www.google.com",
      bitlink_id: "string",
    };
    try {
      var response = await bitly.customBitlinks.add(payload).catch((error) => {
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

describe("customBitlinks.get()", function () {
  it("It should get", async function () {
    var custom_bitlink = "string";
    try {
      var response = await bitly.customBitlinks
        .get(custom_bitlink)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return {};
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

describe("customBitlinks.getClicks()", function () {
  it("It should get clicks for entire history", async function () {
    var custom_bitlink = "string";
    var payload = {
      units: "integer",
      unit: "string",
      unit_reference: "string",
    };

    try {
      var response = await bitly.customBitlinks
        .getClicks(custom_bitlink, payload)
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

describe("customBitlinks.getMetrics()", function () {
  it("It should get metrics", async function () {
    var custom_bitlink = "string";
    var payload = {
      units: "integer",
      unit: "string",
      unit_reference: "string",
    };

    try {
      var response = await bitly.customBitlinks
        .getMetrics(custom_bitlink, payload)
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

describe("customBitlinks.update()", function () {
  it("It should update", async function () {
    var custom_bitlink = 'bitly.is/2rAZFZ1';

  var payload = {
    "bitlink_id": "string",
  }

  try {
    var response = await bitly.customBitlinks.update(custom_bitlink, payload)
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
