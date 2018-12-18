'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  getOrganization: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations/{organization_guid}',
    urlParams: ['organization_guid'],
    required: ['organization_guid']
  }),

  getOrganizations: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations'
  }),

  getOrganizationShortenCounts: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations/{organization_guid}/shorten_counts',
    urlParams: ['organization_guid'],
    required: ['organization_guid']
  })
});
