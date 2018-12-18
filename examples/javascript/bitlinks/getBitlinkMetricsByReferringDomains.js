'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * bitlink (pass bitlink id means without protocol)
   * 
   * (optional)
   * unit (Default: "day", Enum:["minute", "hour", "day", "week", "month"])
   * units
   * size
   * unit_reference
   */
  var bitlink = 'bitly.is/2rAZFZ1';
  var data = {
    size: 10
  }
  try {
    var response = await bitly.bitlinks.getBitlinkMetricsByReferringDomains(bitlink, data);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
