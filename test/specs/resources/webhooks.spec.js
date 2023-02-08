"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("webhooks.create()", function () {
  it("It should create", async function () {
    var payload = {
      organization_guid: "string",
      name: "string",
      event: "string",
      url: "string",
      is_active: "boolean",
      group_guid: "string",
      oauth_url: "string",
      client_id: "string",
      client_secret: "string",
      fetch_tags: "boolean",
    };

    try {
      var response = await bitly.webhooks.create(payload).catch((error) => {
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

describe("webhooks.delete()", function () {
  it("It should delete", async function () {
    var webhook_guid = "string";
    try {
      var response = await bitly.webhooks
        .delete(webhook_guid)
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

describe("webhooks.get()", function () {
  it("It should get", async function () {
    var webhook_guid = "string";
    try {
      var response = await bitly.webhooks.get(webhook_guid).catch((error) => {
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

describe("webhooks.get()", function () {
  it("It should get", async function () {
    var organigation_guid = "string";
    try {
      var response = await bitly.webhooks
        .list(organigation_guid)
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

describe("webhooks.list()", function () {
  it("It should list", async function () {
    var organigation_guid = "string";
    try {
      var response = await bitly.webhooks
        .list(organigation_guid)
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

describe("webhooks.update()", function () {
  it("It should update", async function () {
    var webhook_guid = "string";
    var payload = {
      guid: "string",
      organization_guid: "string",
      name: "string",
      event: "string",
      url: "string",
      is_active: "boolean",
      group_guid: "string",
      oauth_url: "string",
      client_id: "string",
      client_secret: "string",
      fetch_tags: "boolean",
    };

    try {
      var response = await bitly.webhooks
        .update(webhook_guid, payload)
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

describe("webhooks.verify()", function () {
  it("It should verify", async function () {
    var webhook_guid = "string";
    try {
      var response = await bitly.webhooks
        .verify(webhook_guid)
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
