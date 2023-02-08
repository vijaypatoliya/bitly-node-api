'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  shortedLink: bitlyMethod({
    method: 'POST',
    path: 'v4/shorten'
  }),

  create: bitlyMethod({
    method: 'POST',
    path: 'v4/bitlinks'
  }),

  delete: bitlyMethod({
    method: 'DELETE',
    path: 'v4/bitlinks/{bitlink}',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  update: bitlyMethod({
    method: 'PATCH',
    path: 'v4/bitlinks/{bitlink}',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getQR: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/qr',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  updateQR: bitlyMethod({
    method: 'PATCH',
    path: 'v4/bitlinks/{bitlink}/qr',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  createQR: bitlyMethod({
    method: 'POST',
    path: 'v4/bitlinks/{bitlink}/qr',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  expand: bitlyMethod({
    method: 'POST',
    path: 'v4/expand'
  }),

  getClicks: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/clicks',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getClicksSummary: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/clicks/summary',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getMetricsByCountry: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/countries',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getMetricsByCity: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/cities',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getMetricsByDeviceType: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/devices',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getMetricsByReferrers: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/referrers',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),


  getMetricsByReferringDomain: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/referring_domains',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getMetricsByReferrersDomain: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/referrers_by_domains',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getByGroup: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/bitlinks',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  bulkUpdate: bitlyMethod({
    method: 'PATCH',
    path: 'v4/groups/{group_guid}/bitlinks',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  listSortedByGroup: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/bitlinks/{sort}',
    urlParams: ['group_guid', 'sort'],
    required: ['group_guid', 'sort']
  }),

});
