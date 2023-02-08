'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing query parameters 
   * -------------------
   * 
   * organization_guid {string} (optional)
   */
  var payload = {
    organization_guid: 'string',
  };
  try {
    var response = await bitly.groups.list(payload);
  } catch (error) {
    return;
  }
};

groupsRequest();
