'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

import * as BitlyAPI from 'bitly-node-api';

const bitly = new BitlyAPI();

bitly.setUserToken(userToken);

var groupsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid {string}
   * 
   */
  
  var group_guid = 'string';

  try {
    var response = await bitly.groups.get(group_guid);
  } catch (error) {
    return;
  }
};

groupsRequest();
