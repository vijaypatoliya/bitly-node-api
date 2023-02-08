'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var organizationsRequest = async function () {
  /**
   * 
   * passing parameters 
   * -------------------
   * organization_guid
   * 
   * 
   * passing query params
   * --------------------
   * unit {string}
   * units {number}
   * unit_reference {string}
   * 
   */
  var organization_guid = 'string';

  var payload = {
    unit: 'string',
    units: 'number',
    unit_reference: 'string',
  };

  try {
    var response = await bitly.organizations.getShortenCounts(organization_guid, payload);
  } catch (error) {
    return;
  }
};

organizationsRequest();
