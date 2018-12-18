'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid
   */
  var group_guid = 'Bibh7CqXlyA';
  try {
    var response = await bitly.groups.getGroupClickMetricsByReferringNetworks(group_guid);
  } catch (error) {
    return;
  }
};

groupsRequest();
