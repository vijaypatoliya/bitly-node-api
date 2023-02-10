'use strict';

var userToken = process.env.BITLY_USER_TOKEN;

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  try {
    var response = await bitly.user.get();
  } catch (error) {
    return;
  }
};

userRequest();
