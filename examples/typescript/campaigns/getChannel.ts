'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var userRequest = async function () {
  /**
   * 
   * passing path parameters
   * ------------------------
   * channel_guid {string}
   * 
   */
  var channel_guid = 'string';
  try {
    var response = await bitly.campaigns.getChannel(channel_guid);
  } catch (error) {
    return;
  }
};

userRequest();
