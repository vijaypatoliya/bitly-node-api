'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * 
   * passing query parameters
   * ------------------------
   * path {string}
   * 
   */

  var payload = {
    path: 'string'
  }

  try {
    var response = await bitly.user.getPlatformLimits(payload);
  } catch (error) {
    return;
  }
};

userRequest();
