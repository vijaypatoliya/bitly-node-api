'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * 
   * passing body parameters
   * -------------------
   * custom_bitlink {string}
   * bitlink_id {string}
   * 
   */
  var payload = {
    custom_bitlink: 'https://www.google.com',
    bitlink_id: 'string'
  }
  try {
    var response = await bitly.customBitlinks.add(payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
