'use strict';

var userToken = process.env.BITLY_USER_TOKEN || 'YOUR_ACCESS_TOKEN';

var bitly = require('../../../lib')(userToken);

var userRequest = async function () {
  try {
    var response = await bitly.user.getUser();
  } catch (error) {
    return;
  }
};

userRequest();
