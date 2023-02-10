'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  try {
    /**
     * 
     * passing path parameters
     * -----------------------
     * organigation_guid {string}
     * 
     */

    var organigation_guid = 'string';

    var response = await bitly.webhooks.list(organigation_guid);
  } catch (error) {
    return;
  }
};

userRequest();
