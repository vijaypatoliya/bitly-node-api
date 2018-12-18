'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var organizationsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * organization_guid
   */
  try {
    var response = await bitly.organizations.getOrganizations();
  } catch (error) {
    return;
  }
};

organizationsRequest();
