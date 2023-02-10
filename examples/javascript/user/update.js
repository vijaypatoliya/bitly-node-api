'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * 
   * passing body parameters 
   * -------------------
   * name {string}
   * default_group_guid {string}
   * 
   */

  var payload = {
    name: 'string',
    default_group_guid: 'string'
  }

  try {
    var response = await bitly.user.update(payload);
  } catch (error) {
    return;
  }
};

userRequest();
