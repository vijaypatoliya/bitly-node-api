'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  list: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations',
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations/{organization_guid}',
    urlParams: ['organization_guid'],
    required: ['organization_guid']
  }),

  getShortenCounts: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations/{organization_guid}/shorten_counts',
    urlParams: ['organization_guid'],
    required: ['organization_guid']
  }),

  getPlanLimits: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations/{organization_guid}/plan_limits',
    urlParams: ['organization_guid'],
    required: ['organization_guid']
  })
});
