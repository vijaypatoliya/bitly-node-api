'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid
   * 
   * (update parameters)
   * group_guid
   * domain_preference
   */
  var group_guid = 'Bibh7CqXlyA';
  var data = { domain_preference: 'bit.ly' };
  try {
    var response = await bitly.groups.updateGroupPreferences(group_guid, data);
  } catch (error) {
    return;
  }
};

groupsRequest();
