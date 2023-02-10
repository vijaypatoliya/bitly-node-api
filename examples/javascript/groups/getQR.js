'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * group_guid {string}
   * 
   */
  var group_guid = 'string';

  try {
    var response = await bitly.groups.getQR(group_guid);
  } catch (error) {
    return;
  }
};

groupsRequest();
