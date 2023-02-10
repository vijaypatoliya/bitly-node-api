"use strict";

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require("../../../lib")(userToken);

var bitlinksRequest = async function () {
  /**
   *
   * passing parameters
   * -------------------
   *
   * bitlink {string}
   *
   *
   * passing body parameters
   * -----------------------
   * color { string }
   * exclude_bitly_logo { boolean }
   * image_format {string}
   * logo_image_guid {string}
   *
   */

  var bitlink = "bitly.is/2rAZFZ1";

  var payload = {
    color: "string",
    exclude_bitly_logo: "boolean",
    image_format: "string",
    logo_image_guid: "string",
  };

  try {
    var response = await bitly.bitlinks.updateQR(bitlink, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
