'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * long_url {string}
   * 
   * 
   * Optional parameters
   * -------------------
   * group_guid {string}
   * domain {string} (Default: "bit.ly")
   * deeplinks {string}
   * title {string}
   * tags: {array of string}
   * deeplinks: { appId: string, app_uri_path: string, install_url: string, install_type: string }
   * 
   */
  var payload = {
    long_url: 'https://www.google.com'
  }
  try {
    var response = await bitly.bitlinks.create(payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
