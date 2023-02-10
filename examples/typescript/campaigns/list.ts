'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var userRequest = async function () {
  try {
    /**
     * 
     * passing query parameters
     * -----------------------
     * group_guid {string}
     * 
     */

    var payload = {
      group_guid: 'string',
    }

    var response = await bitly.campaigns.list(payload);
  } catch (error) {
    return;
  }
};

userRequest();
