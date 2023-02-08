'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * 
   * passing path parameters
   * -----------------------
   * campaign_guid {string}
   * 
   * 
   * passing body parameters
   * ------------------------
   * group_guid: {string}
   * name {string}
   * description {string}
   * channel_guids {array of string}
   * 
   */

  var campaign_guid = 'string'
  var payload = {
    group_guid: 'string',
    name: 'string',
    description: 'string',
    channel_guids: ['array of string'],
  }

  try {
    var response = await bitly.campaigns.update(campaign_guid, payload);
  } catch (error) {
    return;
  }
};

userRequest();
