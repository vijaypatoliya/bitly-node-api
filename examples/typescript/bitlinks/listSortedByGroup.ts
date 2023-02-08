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
   * group_guid (required)
   * sort
   * 
   * (optional)
   * unit (Default: "day", Enum:["minute", "hour", "day", "week", "month"])
   * units
   * size
   * unit_reference
   */
  var group_guid = 'Bibh7CqXlyA';
  var sort = 'clicks';
  var payload = {
    size: 10
  }
  try {
    var response = await bitly.bitlinks.listSortedByGroup(group_guid, sort, payload);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
