'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * bitlink_id (pass bitlink id means without protocol)
   */
  var data = {
    bitlink_id: 'bitly.is/2rAZFZ1'
  }
  try {
    var response = await bitly.bitlinks.getBitlinkPublicInfo(data);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
