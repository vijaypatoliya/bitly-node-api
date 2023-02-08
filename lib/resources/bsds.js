'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  getOverrides: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/overrides',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/bsds'
  }),

});
