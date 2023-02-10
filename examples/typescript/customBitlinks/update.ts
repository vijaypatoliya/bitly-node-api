'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var bitlinksRequest = async function () {
  /**
   * passing path parameters 
   * -----------------------
   * custom_bitlink {string}
   * 
   * 
   * passing body parameter
   * ----------------------
   * bitlink_id {string}	
   * 	
   */

  var custom_bitlink = 'bitly.is/2rAZFZ1';

  var payload = {
    "bitlink_id": "string",
  }

  try {
    var response = await bitly.customBitlinks.update(custom_bitlink, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
