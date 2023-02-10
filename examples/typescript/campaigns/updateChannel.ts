"use strict";

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var userRequest = async function () {
  /**
   * 
   * passing path parameters
   * -----------------------
   * channel_guid: {string}
   * 
   * 
   * passing body parameters
   * -----------------------
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

  var channel_guid = 'string';

  var payload = {
    name: "string",
    guid: "string",
    creted: "string",
    modified: "string",
    group_guid: "string",
    bitlinks: [
      {
        campaign_guid: "string",
        bitlink_id: "string",
      },
    ],
  };

  try {
    var response = await bitly.campaigns.updateChannel(channel_guid, payload);
  } catch (error) {
    return;
  }
};

userRequest();
