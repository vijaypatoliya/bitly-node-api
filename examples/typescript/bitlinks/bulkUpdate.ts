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
   * group_guid {string} (pass bitlink id means without protocol)
   * 
   * passing body parameters
   * -----------------------
   * 
   * action {string}
   * achive {boolean}
   * age_tags {array of string}
   * remove_tags {array of string}
   * links {array of string}
   * 
   * 
   */

  var group_guid = 'string';

  var payload = {
    action: 'string',
    archive: 'boolean',
    add_tags: ['array of string'],
    remove_tags: ['array of string'],
    links: ['array of string'],
  }
  try {
    var response = await bitly.bitlinks.bulkUpdate(group_guid, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
