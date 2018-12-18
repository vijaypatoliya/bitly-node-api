'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const groupsRequest = async function () {
  bitly.setUserToken(userToken);

  const group_guid = 'Bibh7CqXlyA';
  const data = {
    size: 10
  };
  const response = await bitly.groups.getGroupBitlinks(group_guid, data).catch(error => {
    if (error) {
      return;
    }
  });
};

groupsRequest();
