'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

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
