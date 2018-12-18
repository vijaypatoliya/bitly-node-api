'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const bitlinksRequest = async function () {
  bitly.setUserToken(userToken);

  const group_guid = 'Bibh7CqXlyA';
  const sort = 'clicks';
  const data = {
    size: 10
  };
  const response = await bitly.bitlinks.getGroupSortedBitlinks(group_guid, sort, data).catch(error => {
    if (error) {
      return;
    }
  });
};

bitlinksRequest();
