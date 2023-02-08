"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("groups.get()", function () {
  it("It should get", async function () {
    var group_guid = "string";

    try {
      var response = await bitly.groups.get(group_guid).catch((error) => {
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

describe("groups.getClickMetricsByCity()", function () {
  it("It should get click metrics by city", async function () {
    var group_guid = "string";
    var payload = {
      unit: "string",
      units: "number",
      size: "number",
      unit_reference: "string",
    };
    try {
      var response = await bitly.groups
        .getClickMetricsByCity(group_guid, payload)
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

describe("groups.getClickMetricsByCountry()", function () {
  it("It should get click metrics by country", async function () {
    var group_guid = "string";
    var payload = {
      unit: "string",
      units: "number",
      size: "number",
      unit_reference: "string",
    };

    try {
      var response = await bitly.groups
        .getClickMetricsByCountry(group_guid, payload)
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

describe("groups.getClickMetricsByDeviceType()", function () {
  it("It should get click metrics by device type", async function () {
    var group_guid = "string";
    var payload = {
      unit: "string",
      units: "number",
      size: "number",
      unit_reference: "string",
    };
    try {
      var response = await bitly.groups
        .getClickMetricsByDeviceType(group_guid, payload)
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

describe("groups.getClickMetricsByReferringNetworks()", function () {
  it("It should get click metrics by referring networks", async function () {
    var group_guid = "string";

    try {
      var response = await bitly.groups
        .getClickMetricsByReferringNetworks(group_guid)
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

describe("groups.getclicks()", function () {
  it("It should get clicks", async function () {
    var group_guid = "string";

    try {
      var response = await bitly.groups.getclicks(group_guid).catch((error) => {
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

describe("groups.getPreferences()", function () {
  it("It should get preferences", async function () {
    var group_guid = "string";
    try {
      var response = await bitly.groups
        .getPreferences(group_guid)
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

describe("groups.getQR()", function () {
  it("It should get QR", async function () {
    var group_guid = "string";

    try {
      var response = await bitly.groups.getQR(group_guid).catch((error) => {
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

describe("groups.getShortenCounts()", function () {
  it("It should get shorten counts", async function () {
    var group_guid = "string";
    var payload = {
      unit: "string",
      units: "number",
      unit_reference: "string",
    };
    try {
      var response = await bitly.groups
        .getShortenCounts(group_guid, payload)
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

describe("groups.list()", function () {
  it("It should list", async function () {
    var payload = {
      organization_guid: "string",
    };
    try {
      var response = await bitly.groups.list(payload).catch((error) => {
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

describe("groups.listTags()", function () {
  it("It should listTags", async function () {
    var group_guid = "string";
    try {
      var response = await bitly.groups.listTags(group_guid).catch((error) => {
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

describe("groups.update()", function () {
  it("It should update", async function () {
    var group_guid = "Bibh7CqXlyA";
    var payload = {
      name: "string",
      organization_guid: "string",
      bsds: ["string"],
    };

    try {
      var response = await bitly.groups
        .update(group_guid, payload)
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

describe("groups.updatePreferences()", function () {
  it("It should update preferences", async function () {
    var group_guid = "string";
    var payload = {
      group_guid: "string",
      domain_preference: "bit.ly",
    };

    try {
      var response = await bitly.groups
        .updatePreferences(group_guid, payload)
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

describe("groups.updatePreferences()", function () {
  it("It should update preferences", async function () {
    var group_guid = "string";
    var payload = {
      group_guid: "string",
      domain_preference: "bit.ly",
    };

    try {
      var response = await bitly.groups
        .updatePreferences(group_guid, payload)
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
