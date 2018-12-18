'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var organizationsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * organization_guid
   */
  var organization_guid = 'Oibh7yznRDr';
  try {
    var response = await bitly.organizations.getOrganizationShortenCounts(organization_guid);
  } catch (error) {
    return;
  }
};

organizationsRequest();
