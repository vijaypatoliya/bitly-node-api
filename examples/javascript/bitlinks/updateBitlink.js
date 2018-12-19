'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * bitlink (pass bitlink id means without protocol)
   * 
   * references	
   * archived	
   * tags	
   * created_at	
   * title	
   * deeplinks	
   * created_by	
   * long_url	
   * client_id	
   * custom_bitlinks	
   * link	
   * id	
   */
  var bitlink = 'bitly.is/2rAZFZ1';
  var data = {
    title: 'Get Group Preference',
    created_by: 'Patoliya'
  }
  try {
    var response = await bitly.bitlinks.updateBitlink(bitlink, data);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
