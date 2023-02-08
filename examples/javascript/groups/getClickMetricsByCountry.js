'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * 
   * passing parameters 
   * -------------------
   * group_guid {string}
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
    var response = await bitly.groups.getClickMetricsByCountry(group_guid, payload);
  } catch (error) {
    return;
  }
};

groupsRequest();
