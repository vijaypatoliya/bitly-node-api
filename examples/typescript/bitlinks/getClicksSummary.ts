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
   * bitlink (pass bitlink id means without protocol)
   * 
   * passing query parameters
   * ------------------------
   * unit {string} (Default: "day", Enum:["minute", "hour", "day", "week", "month"])
   * units {number}
   * unit_reference {string}
   */

  var bitlink = 'bitly.is/2rAZFZ1';
  var payload = {
    "units": "integer",
    "unit": "string",
    "unit_reference": "string"
  }

  try {
    var response = await bitly.bitlinks.getClicksSummary(bitlink, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
