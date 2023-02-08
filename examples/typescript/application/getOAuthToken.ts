'use strict';

var clientId = process.env.BITLY_CLIENT_ID;
var clientSecret = process.env.BITLY_CLIENT_SECRET;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

var applicationRequest = async function () {
  bitly.setApiKey(clientId, clientSecret);
  
  /**
   * passing parameters 
   * -------------------
   * 
   * username
   * password
   */
  var options = {
    username: 'Username',
    password: 'Password'
  };
  try {
    var response = await bitly.application.getOAuthToken(options);
    if(response && response.access_token) {
      bitly.setUserToken(response.access_token);
    }
  } catch (error) {
    console.log(error)
    return;
  }
};

applicationRequest();
