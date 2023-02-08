'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

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
   * unit_reference {string}
   * 
   */

  var group_guid = 'string';

  try {
    var response = await bitly.groups.getclicks(group_guid);
  } catch (error) {
    return;
  }
};

groupsRequest();
