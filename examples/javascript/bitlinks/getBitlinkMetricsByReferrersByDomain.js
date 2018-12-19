'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * bitlink (pass bitlink id means without protocol)
   * 
   * unit (Default: "day", Enum:["minute", "hour", "day", "week", "month"])
   * units
   * size
   * unit_reference
   */
  var bitlink = 'bitly.is/2rAZFZ1';
  var data = {
    unit: 'minute'
  }
  try {
    var response = await bitly.bitlinks.getBitlinkMetricsByReferrersByDomain(bitlink, data);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
