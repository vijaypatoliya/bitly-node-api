'use strict';

const userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

const organizationsRequest = async function () {
  bitly.setUserToken(userToken);

  const organization_guid = 'Oibh7yznRDr';
  const response = await bitly.organizations.getOrganizationShortenCounts(organization_guid).catch(error => {
    if (error) {
      return;
    }
  });
};

organizationsRequest();
