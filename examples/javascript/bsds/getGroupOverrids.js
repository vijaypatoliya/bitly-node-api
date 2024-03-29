'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var organizationsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid {string} (required)
   * 
   * 
   * passing query parameters
   * ------------------------
   * 
   * group_guid {array}
   * created_after {number}
   * limit {number}
   * offset {number}
   * bsd {array}
   * 
   */
  var group_guid = 'string';
  var payload = {
    group_guid: ['array'],
    created_after: 'number',
    limit: 'number',
    offset: 'number',
    bsd: ['array'],
  }

  try {
    var response = await bitly.bsds.getGroupOverrides(group_guid, payload);
  } catch (error) {
    return;
  }
};

organizationsRequest();
