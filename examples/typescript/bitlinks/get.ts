'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var bitlinksRequest = async function () {
  /**
   * 
   * passing parameters 
   * -------------------
   * 
   * bitlink {string}
   * 
   */
  var bitlink = 'bitly.is/2rAZFZ1';
  try {
    var response = await bitly.bitlinks.get(bitlink);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
