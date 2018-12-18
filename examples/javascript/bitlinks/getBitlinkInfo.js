'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * bitlink (pass bitlink id means without protocol)
   */
  var bitlink = 'bitly.is/2rAZFZ1';
  try {
    var response = await bitly.bitlinks.getBitlinkInfo(bitlink);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
