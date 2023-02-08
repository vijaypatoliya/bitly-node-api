'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var organizationsRequest = async function () {
  /**
   * 
   * passing parameters 
   * -------------------
   * organization_guid {string}
   * 
   */

  var organization_guid = 'string';

  try {
    var response = await bitly.organizations.get(organization_guid);
  } catch (error) {
    return;
  }
};

organizationsRequest();
