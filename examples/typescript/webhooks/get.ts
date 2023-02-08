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
   * webhook_guid {string}
   * 
   */
  var webhook_guid = 'string';
  try {
    var response = await bitly.webhooks.get(webhook_guid);
  } catch (error) {
    return;
  }
};

userRequest();
