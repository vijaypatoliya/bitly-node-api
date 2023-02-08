"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")(userToken);

describe("bitlinks.bulkUpdate()", function () {
  it("It should bulk update", async function () {
    var group_guid = "string";

    var payload = {
      action: "string",
      archive: "boolean",
      add_tags: ["array of string"],
      remove_tags: ["array of string"],
      links: ["array of string"],
    };
    try {
      var response = await bitly.bitlinks
        .bulkUpdate(group_guid, payload)
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

describe("bitlinks.create()", function () {
  it("It should create", async function () {
    var payload = {
      long_url: "https://www.google.com",
    };

    try {
      var response = await bitly.bitlinks.create(payload).catch((error) => {
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

describe("bitlinks.createQR()", function () {
  it("It should create QR", async function () {
    var bitlink = "bitly.is/2rAZFZ1";

    var payload = {
      color: "string",
      exclude_bitly_logo: "boolean",
      image_format: "string",
      logo_image_guid: "string",
    };

    try {
      var response = await bitly.bitlinks
        .createQR(bitlink, payload)
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

describe("bitlinks.delete()", function () {
  it("It should delete", async function () {
    var bitlink = "bitly.is/2rAZFZ1";

    try {
      var response = await bitly.bitlinks.delete(bitlink).catch((error) => {
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

describe("bitlinks.expand()", function () {
  it("It should expand", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    try {
      var response = await bitly.bitlinks.expand(bitlink).catch((error) => {
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

describe("bitlinks.get()", function () {
  it("It should get", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    try {
      var response = await bitly.bitlinks.get(bitlink).catch((error) => {
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

describe("bitlinks.getByGroup()", function () {
  it("It should get by group", async function () {
    var group_guid = "Bibh7CqXlyA";
    var payload = {
      size: "number",
      page: "number",
      keyword: "string",
      query: "string",
      created_before: "number",
      created_after: "number",
      modified_after: "number",
      archived: "string",
      deeplinks: "string",
      domain_deeplinks: "string",
      campaign_guid: "string",
      channel_guid: "string",
      custom_bitlink: "string",
      tags: "array",
      launchpad_ids: "array",
      encoding_login: "array",
    };
    try {
      var response = await bitly.bitlinks
        .getByGroup(group_guid, payload)
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

describe("bitlinks.getClicks()", function () {
  it("It should get clicks", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      units: "integer",
      unit: "string",
      unit_reference: "string",
    };

    try {
      var response = await bitly.bitlinks
        .getClicks(bitlink, payload)
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

describe("bitlinks.getClicksSummary()", function () {
  it("It should get clicks summary", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      units: "integer",
      unit: "string",
      unit_reference: "string",
    };

    try {
      var response = await bitly.bitlinks
        .getClicksSummary(bitlink, payload)
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

describe("bitlinks.getMetricsByCity()", function () {
  it("It should get metrics by city", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      unit: "minute",
    };
    try {
      var response = await bitly.bitlinks
        .getMetricsByCity(bitlink, payload)
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

describe("bitlinks.getMetricsByCountry()", function () {
  it("It should get metrics by Country", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      units: "number",
      unit: "string",
      size: "number",
      unit_reference: "string",
    };
    try {
      var response = await bitly.bitlinks
        .getMetricsByCountry(bitlink, payload)
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

describe("bitlinks.getMetricsByDeviceType()", function () {
  it("It should get metrics by device type", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      units: "number",
      unit: "string",
      size: "number",
      unit_reference: "string",
    };
    try {
      var response = await bitly.bitlinks
        .getMetricsByDeviceType(bitlink, payload)
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

describe("bitlinks.getMetricsByReferrers()", function () {
  it("It should get metrics by referrers", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      units: "number",
      unit: "string",
      size: "number",
      unit_reference: "string",
    };

    try {
      var response = await bitly.bitlinks
        .getMetricsByReferrers(bitlink, payload)
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

describe("bitlinks.getMetricsByReferrersDomain()", function () {
  it("It should get metrics by referrers domain", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      units: "number",
      unit: "string",
      size: "number",
      unit_reference: "string",
    };

    try {
      var response = await bitly.bitlinks
        .getMetricsByReferrersDomain(bitlink, payload)
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

describe("bitlinks.getMetricsByReferringDomain()", function () {
  it("It should get metrics by referring domain", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    var payload = {
      units: "number",
      unit: "string",
      size: "number",
      unit_reference: "string",
    };

    try {
      var response = await bitly.bitlinks
        .getMetricsByReferringDomain(bitlink, payload)
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

describe("bitlinks.getQR()", function () {
  it("It should get QR", async function () {
    var bitlink = "bitly.is/2rAZFZ1";
    try {
      var response = await bitly.bitlinks.getQR(bitlink).catch((error) => {
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

describe("bitlinks.listSortedByGroup()", function () {
  it("It should list sorted by group", async function () {
    var group_guid = "Bibh7CqXlyA";
    var sort = "clicks";
    var payload = {
      size: 10,
    };
    try {
      var response = await bitly.bitlinks
        .listSortedByGroup(group_guid, sort, payload)
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

describe("bitlinks.shortedLink()", function () {
  it("It should sorted link", async function () {
    var group_guid = "string";
    var sort = "string";

    var payload = {
      unit: "string",
      units: "number",
      unit_reference: "string",
      size: "number",
    };

    try {
      var response = await bitly.bitlinks
        .shortedLink(group_guid, sort, payload)
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

describe("bitlinks.update()", function () {
  it("It should update", async function () {
    var bitlink = "bitly.is/2rAZFZ1";

    var payload = {
      references: {
        /* any */
      },
      link: "string",
      id: "string",
      long_url: "string",
      title: "string",
      archived: "boolean",
      created_at: "string",
      created_by: "string",
      client_id: "string",
      custom_bitlinks: ["string"],
      tags: ["string"],
      launchpad_ids: ["string"],
      deeplinks: [
        {
          guid: "string",
          bitlink: "string",
          app_uri_path: "string",
          install_url: "string",
          app_guid: "string",
          os: "string",
          install_type: "string",
          created: "string",
          modified: "string",
          brand_guid: "string",
        },
      ],
      is_deleted: "boolean",
    };

    try {
      var response = await bitly.bitlinks
        .update(bitlink, payload)
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

describe("bitlinks.updateQR()", function () {
  it("It should update QR", async function () {
    var bitlink = "bitly.is/2rAZFZ1";

    var payload = {
      color: "string",
      exclude_bitly_logo: "boolean",
      image_format: "string",
      logo_image_guid: "string",
    };

    try {
      var response = await bitly.bitlinks
        .updateQR(bitlink, payload)
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
