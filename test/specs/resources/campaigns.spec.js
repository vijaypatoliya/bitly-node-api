"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("campaigns.create()", function () {
  it("It should create", async function () {
    var payload = {
      group_guid: "string",
      name: "string",
      description: "string",
      channel_guids: ["array of string"],
    };

    try {
      var response = await bitly.campaigns.create(payload).catch((error) => {
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

describe("campaigns.createChannel()", function () {
  it("It should crate channel", async function () {
    var payload = {
      name: "string",
      guid: "string",
      creted: "string",
      modified: "string",
      group_guid: "string",
      bitlinks: [
        {
          campaign_guid: "string",
          bitlink_id: "string",
        },
      ],
    };

    try {
      var response = await bitly.campaigns
        .createChannel(payload)
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

describe("campaigns.get()", function () {
  it("It should get", async function () {
    var campaign_guid = "string";
    try {
      var response = await bitly.campaigns.get(campaign_guid).catch((error) => {
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

describe("campaigns.getChannel()", function () {
  it("It should get channel", async function () {
    var channel_guid = "string";
    try {
      var response = await bitly.campaigns
        .getChannel(channel_guid)
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

describe("campaigns.list()", function () {
  it("It should list", async function () {
    var payload = {
      group_guid: "string",
    };
    try {
      var response = await bitly.campaigns.list(payload).catch((error) => {
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

describe("campaigns.listChannels()", function () {
  it("It should list channels", async function () {
    var payload = {
      group_guid: "string",
      campaign_guid: "string",
    };
    try {
      var response = await bitly.campaigns
        .listChannels(payload)
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

describe("campaigns.update()", function () {
  it("It should update", async function () {
    var campaign_guid = "string";
    var payload = {
      group_guid: "string",
      name: "string",
      description: "string",
      channel_guids: ["array of string"],
    };

    try {
      var response = await bitly.campaigns
        .update(campaign_guid, payload)
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

describe("campaigns.updateChannel()", function () {
  it("It should update channel", async function () {
    var channel_guid = "string";

    var payload = {
      name: "string",
      guid: "string",
      creted: "string",
      modified: "string",
      group_guid: "string",
      bitlinks: [
        {
          campaign_guid: "string",
          bitlink_id: "string",
        },
      ],
    };

    try {
      var response = await bitly.campaigns
        .updateChannel(channel_guid, payload)
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
