'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const groupsRequest = async function () {
  bitly.setUserToken(userToken);

  const group_guid = 'Bibh7CqXlyA';
  const response = await bitly.groups.getGroupClickMetricsByCountries(group_guid).catch(error => {
    if (error) {
      return;
    }
  });
};

groupsRequest();
