'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * 
   * passing query parameters
   * ------------------------
   * group_guid {string}
   * campaign_guid {string}
   * 
   */
  var payload = {
    group_guid: 'string',
    campaign_guid: 'string',
  }
  try {
    var response = await bitly.campaigns.listChannels(payload);
  } catch (error) {
    return;
  }
};

userRequest();
