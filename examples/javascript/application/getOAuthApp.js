'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var applicationRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * client_id {string}
   */
  var client_id = 'string';
  try {
    var response = await bitly.application.getOAuthApp(client_id);
  } catch (error) {
    return;
  }
};

applicationRequest();
