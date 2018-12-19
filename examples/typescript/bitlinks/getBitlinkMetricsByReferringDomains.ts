'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const bitlinksRequest = async function () {
  bitly.setUserToken(userToken);

  const bitlink = 'bitly.is/2rAZFZ1';
  const data = {
    size: 10
  };
  const response = await bitly.bitlinks.getBitlinkMetricsByReferringDomains(bitlink, data).catch(error => {
    if (error) {
      return;
    }
  });
};

bitlinksRequest();
