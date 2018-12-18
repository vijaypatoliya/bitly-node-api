'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  getBitlinkMetricsByCountries: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/countries',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getBitlinkPublicInfo: bitlyMethod({
    method: 'POST',
    path: 'v4/expand'
  }),

  getBitlinkMetricsByReferrers: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/referrers',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  createBitlink: bitlyMethod({
    method: 'POST',
    path: 'v4/bitlinks'
  }),

  getBitlinksByGroup: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/bitlinks',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getBitlinkClicksSummary: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/clicks/summary',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getBitlinkClicks: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/clicks',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  updateBitlink: bitlyMethod({
    method: 'PATCH',
    path: 'v4/bitlinks/{bitlink}',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getBitlinkInfo: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  shortenLink: bitlyMethod({
    method: 'POST',
    path: 'v4/shorten'
  }),

  getBitlinkMetricsByReferrersByDomain: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/referrers_by_domains',
    urlParams: ['bitlink'],
    required: ['bitlink']
  }),

  getGroupSortedBitlinks: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/bitlinks/{sort}',
    urlParams: ['group_guid', 'sort'],
    required: ['group_guid', 'sort']
  }),

  getBitlinkMetricsByReferringDomains: bitlyMethod({
    method: 'GET',
    path: 'v4/bitlinks/{bitlink}/referring_domains',
    urlParams: ['bitlink'],
    required: ['bitlink']
  })
});
