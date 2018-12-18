'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid
   * 
   * name
   * organization_guid
   */
  var group_guid = 'Bibh7CqXlyA';
  var data = {
    name: 'Patoliya'
  };
  try {
    var response = await bitly.groups.updateGroup(group_guid, data);
  } catch (error) {
    return;
  }
};

groupsRequest();
