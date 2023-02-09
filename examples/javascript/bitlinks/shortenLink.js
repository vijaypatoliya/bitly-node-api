'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing body parameters 
   * -------------------
   * 
   * long_url {string}
   * domain {string}
   * group_guid {string}
   * 
   */

  var payload = {
    long_url: 'string',
    domain: 'number',
    group_guid: 'string',
  }

  try {
    var response = await bitly.bitlinks.shortenLink(payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
