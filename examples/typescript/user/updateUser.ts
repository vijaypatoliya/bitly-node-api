'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const userRequest = async function () {
  bitly.setUserToken(userToken);

  const data = {
    name: 'patoliya',
    default_group_guid: 'Bibh7CqXlyA'
  }
  const response = await bitly.user.updateUser(data).catch(error => {
    if (error) {
      return;
    }
  });
};

userRequest();
