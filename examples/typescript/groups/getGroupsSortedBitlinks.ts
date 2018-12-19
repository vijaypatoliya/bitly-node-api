'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const groupsRequest = async function () {
  bitly.setUserToken(userToken);

  const group_guid = 'Bibh7CqXlyA';
  const sort = 'clicks';
  const data = {};
  const response = await bitly.groups.getGroupsSortedBitlinks(group_guid, sort, data).catch(error => {
    if (error) {
      return;
    }
  });
};

groupsRequest();
