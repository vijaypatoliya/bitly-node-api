'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var userRequest = async function () {
  /**
   * 
   * passing body parameters
   * ------------------------
   * group_guid {string}
   * name {string}
   * description {string}
   * channel_guids {array of string}
   *
   */

  var payload = {
    group_guid: 'string',
    name: 'string',
    description: 'string',
    channel_guids: ['array of string'],
  }

  try {
    var response = await bitly.campaigns.create(payload);
  } catch (error) {
    return;
  }
};

userRequest();
