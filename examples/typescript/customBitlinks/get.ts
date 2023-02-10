'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var bitlinksRequest = async function () {
  /**
   * 
   * passing path parameters 
   * -------------------
   * 
   * custom_bitlink {string}
   * 
   */
  var custom_bitlink = 'string';
  try {
    var response = await bitly.customBitlinks.get(custom_bitlink);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
