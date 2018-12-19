'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const bitlinksRequest = async function () {
  bitly.setUserToken(userToken);

  const data = {
    long_url: 'https://www.facebook.com'
  };
  const response = await bitly.bitlinks.shortenLink(data).catch(error => {
    if (error) {
      return;
    }
  });
};

bitlinksRequest();
