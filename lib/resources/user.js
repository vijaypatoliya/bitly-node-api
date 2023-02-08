'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  update: bitlyMethod({
    method: 'PATCH',
    path: 'v4/user'
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/user'
  }),

  getPlatformLimits: bitlyMethod({
    method: 'GET',
    path: 'v4/user/platform_limits'
  })
});
