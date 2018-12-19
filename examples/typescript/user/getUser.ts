'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const userRequest = async function () {
  bitly.setUserToken(userToken);

  const response = await bitly.user.getUser().catch(error => {
    if (error) {
      return;
    }
  });
};

userRequest();
