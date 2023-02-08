'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * bitlink {string}
   * 
   * 
   * passing body parameter
   * ----------------------
   * 
   * references {object}
   * link	{string}
   * id	{string}
   * long_url	{string}
   * title {string}
   * archived	{boolean}
   * created_at {string}
   * created_by	{string}
   * client_id {string}
   * custom_bitlinks {array of string}
   * tags	{array of string}
   * lunchpad_ids {array of string}
   * deeplinks [{
   *    guid: {string}
   *    bitlink: {string}
   *    app_uri_path: {string}
   *    install_url: {string}
   *    app_guid: {string}
   *    os: {string}
   *    install_type: {string}
   *    created: {string}
   *    modified: {string}
   *    brand_guid: {string}
   * }]
   * is_deleted {boolean}	
   * 	
   */

  var bitlink = 'bitly.is/2rAZFZ1';

  var payload = {
    "references": { /* any */ },
    "link": "string",
    "id": "string",
    "long_url": "string",
    "title": "string",
    "archived": "boolean",
    "created_at": "string",
    "created_by": "string",
    "client_id": "string",
    "custom_bitlinks": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "launchpad_ids": [
      "string"
    ],
    "deeplinks": [
      {
        "guid": "string",
        "bitlink": "string",
        "app_uri_path": "string",
        "install_url": "string",
        "app_guid": "string",
        "os": "string",
        "install_type": "string",
        "created": "string",
        "modified": "string",
        "brand_guid": "string"
      }
    ],
    "is_deleted": "boolean"
  }

  try {
    var response = await bitly.bitlinks.update(bitlink, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
