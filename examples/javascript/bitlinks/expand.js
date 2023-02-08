'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * 
   * passing body parameters 
   * -------------------
   * 
   * bitlink {string}
   * 
   */
  var bitlink = 'bitly.is/2rAZFZ1';
  try {
    var response = await bitly.bitlinks.expand(bitlink);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
