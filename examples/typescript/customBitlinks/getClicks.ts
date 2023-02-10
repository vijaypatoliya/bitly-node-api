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
   * custom_bitlink {string}
   * 
   * passing query parameters
   * ------------------------
   * unit {string} (Default: "day", Enum:["minute", "hour", "day", "week", "month"])
   * units {number}
   * unit_reference {string}
   */

  var custom_bitlink = 'string';
  var payload = {
    "units": "integer",
    "unit": "string",
    "unit_reference": "string"
  }

  try {
    var response = await bitly.customBitlinks.getClicks(custom_bitlink, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
