'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * group_guid {string}
   * 
   * 
   * passing query parameters
   * ------------------------
   * unit {string}
   * units {number}
   * 
   * optional query parameters
   * -------------------------
   * size {number}
   * unit_reference {string}
   * 
   */
  var group_guid = 'string';
  var payload = {
    unit: 'string',
    units: 'number',
    size: 'number',
    unit_reference: 'string'
  }
  try {
    var response = await bitly.groups.getClickMetricsByCity(group_guid, payload);
  } catch (error) {
    return;
  }
};

groupsRequest();
