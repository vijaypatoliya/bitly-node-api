'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid
   * domain (Default: "bit.ly")
   * long_url
   */
  var data = {
    long_url: 'https://www.facebook.com'
  }
  try {
    var response = await bitly.bitlinks.shortenLink(data);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
