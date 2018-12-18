'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var bitlinksRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * group_guid (required)
   * 
   * (optional)
   * size
   * page
   * keyword
   * query
   * created_before
   * created_after
   * modified_after
   * archived
   * deeplinks
   * domain_deeplinks
   * campaign_guid
   * channel_guid
   * custom_bitlink
   * tags
   * encoding_login
   */
  var group_guid = 'Bibh7CqXlyA';
  var data = {
    size: 10
  }
  try {
    var response = await bitly.bitlinks.getBitlinksByGroup(group_guid, data);
  } catch (error) {
    return;
  }
};

bitlinksRequest();
