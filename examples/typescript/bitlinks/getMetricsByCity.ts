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
   * unit (Default: "day", Enum:["minute", "hour", "day", "week", "month"])
   * units
   * size
   * unit_reference
   */
  var bitlink = 'bitly.is/2rAZFZ1';
  var payload = {
    unit: 'minute'
  }
  try {
    var response = await bitly.bitlinks.getMetricsByCity(bitlink, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
