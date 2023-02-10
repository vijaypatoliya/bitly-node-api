'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var bitlinksRequest = async function () {
  /**
   * 
   * passing body parameters 
   * -------------------
   * 
   * bitlink_id {string}
   * 
   */
  var payload = {
    bitlink_id: 'string'
  }
  try {
    var response = await bitly.bitlinks.expand(payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
