"use strict";

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require("../../../lib")(userToken);

var userRequest = async function () {
  /**
   *
   * passing path parameters
   * ------------------------
   * campaign_guid {string}
   *
   */
  var campaign_guid = "string";
  try {
    var response = await bitly.campaigns.get(campaign_guid);
  } catch (error) {
    return;
  }
};

userRequest();
