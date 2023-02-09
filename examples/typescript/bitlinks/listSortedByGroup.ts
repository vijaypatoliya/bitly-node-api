'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var bitlinksRequest = async function () {
  /**
   * 
   * passing path parameters
   * -----------------------
   * group_guid {string}
   * sort {string}
   * 
   * passing query parameters 
   * -------------------
   * 
   * unit {string}
   * units {number}
   * unit_reference {string}
   * size {number}
   * 
   */

  var group_guid = 'string';
  var sort = 'string';

  var payload = {
    unit: 'string',
    units: 'string',
    unit_reference: 'string',
    size: 'number'
  }
  try {
    var response = await bitly.bitlinks.listSortedByGroup(group_guid, sort, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
