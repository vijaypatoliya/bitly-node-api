'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var userRequest = async function () {
  /**
   * 
   * passing body parameters
   * ------------------------
   * organization_guid {string}
   * name {string}
   * event {string}
   * url {string}
   * 
   * 
   * optional body parameters
   * ------------------------
   * is_active {boolean}
   * group_guid {string}
   * oauth_url {string}
   * client_id {string}
   * client_secret {string}
   * fetch_tags {boolean}
   * 
   */

  var payload = {
    organization_guid: 'string',
    name: 'string',
    event: 'string',
    url: 'string',
    is_active: 'boolean',
    group_guid: 'string',
    oauth_url: 'string',
    client_id: 'string',
    client_secret: 'string',
    fetch_tags: 'boolean'
  }

  try {
    var response = await bitly.webhooks.create(payload);
  } catch (error) {
    return;
  }
};

userRequest();
