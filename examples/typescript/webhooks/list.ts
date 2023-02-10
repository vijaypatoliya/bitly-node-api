'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

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
