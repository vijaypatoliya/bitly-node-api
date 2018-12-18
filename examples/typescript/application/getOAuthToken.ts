'use strict';

const clientId = process.env.BITLY_CLIENT_ID;
const clientSecret = process.env.BITLY_CLIENT_SECRET;
import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const applicationRequest = async function () {
  bitly.setApiKey(clientId, clientSecret);
  
  const options = {
    username: 'Username',
    password: 'Password'
  };
  const response = await bitly.application.getOAuthToken(options).catch(error => {
    if (error) {
      return;
    }
  });
};

applicationRequest();
