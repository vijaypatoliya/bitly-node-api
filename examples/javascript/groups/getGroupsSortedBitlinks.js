'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid
   * sort
   * 
   * unit
   * units
   * unit_reference
   * size
   */
  var group_guid = 'Bibh7CqXlyA';
  var sort = 'clicks';
  var data = {};
  try {
    var response = await bitly.groups.getGroupsSortedBitlinks(group_guid, sort, data);
  } catch (error) {
    return;
  }
};

groupsRequest();
