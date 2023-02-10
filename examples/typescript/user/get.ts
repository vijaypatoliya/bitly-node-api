'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var userRequest = async function () {
  try {
    var response = await bitly.user.get();
  } catch (error) {
    return;
  }
};

userRequest();
