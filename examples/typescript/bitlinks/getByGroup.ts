'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid {string} (required)
   * 
   * optional query parameters
   * -------------------
   * size {number}
   * page {number}
   * keyword {string}
   * query {string}
   * created_before {number}
   * created_after {number}
   * modified_after {number}
   * archived {string}
   * deeplinks {string}
   * domain_deeplinks {string}
   * campaign_guid {string}
   * channel_guid {string}
   * custom_bitlink {string}
   * tags {array}
   * lunchpad_ids {array}
   * encoding_login {array}
   */
  var group_guid = 'string';
  var payload = {
    size: 'number',
    page: 'number',
    keyword: 'string',
    query: 'string',
    created_before: 'number',
    created_after: 'number',
    modified_after: 'number',
    archived: 'string',
    deeplinks: 'string',
    domain_deeplinks: 'string',
    campaign_guid: 'string',
    channel_guid: 'string',
    custom_bitlink: 'string',
    tags: 'array',
    launchpad_ids: 'array',
    encoding_login: 'array',
  }
  try {
    var response = await bitly.bitlinks.getByGroup(group_guid, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
