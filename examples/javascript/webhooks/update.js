'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * 
   * passing path parameters
   * -----------------------
   * webhook_guid {string}
   * 
   * 
   * passing body parameters
   * ------------------------
   * guid: string
   * 
   * 
   * optional body parameters
   * ------------------------
   * is_active {boolean}
   * organization_guid {string}
   * name {string}
   * event {string}
   * url {string}
   * group_guid {string}
   * oauth_url {string}
   * client_id {string}
   * client_secret {string}
   * fetch_tags {boolean}
   * 
   */

  var webhook_guid = 'string'
  var payload = {
    guid: 'string',
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
    var response = await bitly.webhooks.update(webhook_guid, payload);
  } catch (error) {
    return;
  }
};

userRequest();
