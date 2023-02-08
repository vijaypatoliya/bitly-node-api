'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var organizationsRequest = async function () {
  try {
    var response = await bitly.organizations.list();
  } catch (error) {
    return;
  }
};

organizationsRequest();
