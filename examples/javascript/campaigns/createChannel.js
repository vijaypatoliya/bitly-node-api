'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * 
   * passing body parameters 
   * -------------------
   * name {string}
   * guid {string}
   * created {string}
   * modified {string}
   * group_guid {string}
   * bitlinks [{
   *    campaign_guid: {string},
   *    bitlink_id: {string},
   * }]
   * 
   */

  var payload = {
    name: 'string',
    guid: 'string',
    creted: 'string',
    modified: 'string',
    group_guid: 'string',
    bitlinks: [{
      campaign_guid: 'string',
      bitlink_id: 'string'
    }]
  }

  try {
    var response = await bitly.campaigns.createChannel(payload);
  } catch (error) {
    return;
  }
};

userRequest();
