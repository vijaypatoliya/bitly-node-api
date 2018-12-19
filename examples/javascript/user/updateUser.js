'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * name
   * default_group_guid
   */
  var data = {
    name: 'patoliya',
    default_group_guid: 'Bibh7CqXlyA'
  }
  try {
    var response = await bitly.user.updateUser(data);
  } catch (error) {
    return;
  }
};

userRequest();
