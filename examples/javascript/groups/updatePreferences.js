'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * group_guid {string}
   * 
   * 
   * passing body parameters
   * -----------------------
   * group_guid {string}
   * domain_preference {string}
   */

  var group_guid = 'string';
  var payload = {
    group_guid: 'string',
    domain_preference: 'bit.ly',
  };

  try {
    var response = await bitly.groups.updatePreferences(group_guid, payload);
  } catch (error) {
    return;
  }
};

groupsRequest();
