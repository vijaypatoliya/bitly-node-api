'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  updateUser: bitlyMethod({
    method: 'PATCH',
    path: 'v4/user'
  }),

  getUser: bitlyMethod({
    method: 'GET',
    path: 'v4/user'
  })
});
