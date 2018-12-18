'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const applicationRequest = async function () {
  bitly.setUserToken(userToken);

  const client_id = 'deaf3dd0e991db18740dc50b4161253251348a20';
  const response = await bitly.application.getOAuthApp(client_id).catch(error => {
    if (error) {
      return;
    }
  });
};

applicationRequest();
