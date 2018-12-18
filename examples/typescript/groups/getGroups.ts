'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const groupsRequest = async function () {
  bitly.setUserToken(userToken);

  const data = {};
  const response = await bitly.groups.getGroups(data).catch(error => {
    if (error) {
      return;
    }
  });
};

groupsRequest();
