'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * 
   * passing path parameters
   * ------------------------
   * webhook_guid {string}
   * 
   */

  try {
    var response = await bitly.webhooks.get(webhook_guid);
  } catch (error) {
    return;
  }
};

userRequest();
