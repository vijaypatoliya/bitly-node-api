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
   * group_guid {string}
   * sort {string}
   * 
   * passing query parameters
   * ------------------------
   * 
   * unit {string} (Default: "bit.ly")
   * units {number}
   * unit_reference {string}
   * size {number}
   * 
   */

  var group_guid = 'string';
  var sort = 'string';

  var payload = {
    unit: 'string',
    units: 'number',
    unit_reference: 'string',
    size: 'number',
  }

  try {
    var response = await bitly.bitlinks.shortedLink(group_guid, sort, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
