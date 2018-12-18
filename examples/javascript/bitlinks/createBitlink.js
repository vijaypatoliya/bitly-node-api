'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * long_url (required)
   * 
   * group_guid
   * domain (Default: "bit.ly")
   * deeplinks
   * title
   */
  var data = {
    long_url: 'https://www.google.com'
  }
  try {
    var response = await bitly.bitlinks.createBitlink(data);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
