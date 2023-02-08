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
   * name {string}
   * organization_guid {string}
   * bsds {array of string}
   * 
   * 
   */
  var group_guid = 'Bibh7CqXlyA';
  var payload = {
    name: 'string',
    organization_guid: 'string',
    bsds: ['string'],
  };

  try {
    var response = await bitly.groups.update(group_guid, payload);
  } catch (error) {
    return;
  }
};

groupsRequest();
