'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var applicationRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * client_id
   */
  var client_id = 'deaf3dd0e991db18740dc50b4161253251348a20';
  try {
    var response = await bitly.application.getOAuthApp(client_id);
  } catch (error) {
    return;
  }
};

applicationRequest();
