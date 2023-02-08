'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var organizationsRequest = async function () {
  try {
    var response = await bitly.bsds.list();
  } catch (error) {
    return;
  }
};

organizationsRequest();
