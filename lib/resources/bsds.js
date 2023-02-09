'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  getGroupOverrides: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/overrides',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  list: bitlyMethod({
    method: 'GET',
    path: 'v4/bsds'
  }),

});
