'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * bitlink (pass bitlink id means without protocol)
   * 
   * passing query parameters
   * ------------------------
   * unit {string} (Default: "day", Enum:["minute", "hour", "day", "week", "month"])
   * units {number}
   * size {number}
   * unit_reference {string}
   */

  var bitlink = 'bitly.is/2rAZFZ1';
  var payload = {
    "units": "number",
    "unit": "string",
    "size": "number",
    "unit_reference": "string"
  }

  try {
    var response = await bitly.bitlinks.getMetricsByReferringDomain(bitlink, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
