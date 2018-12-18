'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * organization_guid (optional)
   */
  var data = {};
  try {
    var response = await bitly.groups.getGroups(data);
  } catch (error) {
    return;
  }
};

groupsRequest();
