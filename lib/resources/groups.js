'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  list: bitlyMethod({
    method: 'GET',
    path: 'v4/groups'
  }),

  update: bitlyMethod({
    method: 'PATCH',
    path: 'v4/groups/{group_guid}',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  listTags: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/tags',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getPreferences: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/preferences',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  updatePreferences: bitlyMethod({
    method: 'PATCH',
    path: 'v4/groups/{group_guid}/preferences',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getShortenCounts: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/shorten_counts',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getClickMetricsByCountry: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/countries',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getClickMetricsByCity: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/cities',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getClickMetricsByDeviceType: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/devices',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getClickMetricsByReferringNetworks: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/referring_networks',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getClicks: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/clicks',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getQR: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/qr/images',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

});
