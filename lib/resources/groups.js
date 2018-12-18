'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  getGroupPreferences: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/preferences',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  updateGroupPreferences: bitlyMethod({
    method: 'PATCH',
    path: 'v4/groups/{group_guid}/preferences',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getGroupBitlinks: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/bitlinks',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getCurrentUsedGroupTags: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/tags',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getGroupClickMetricsByCountries: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/countries',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getGroupClickMetricsByReferringNetworks: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/referring_networks',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getGroupShortenCounts: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/shorten_counts',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getGroups: bitlyMethod({
    method: 'GET',
    path: 'v4/groups'
  }),

  getGroupsSortedBitlinks: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}/bitlinks/{sort}',
    urlParams: ['group_guid', 'sort'],
    required: ['group_guid', 'sort']
  }),

  updateGroup: bitlyMethod({
    method: 'PATCH',
    path: 'v4/groups/{group_guid}',
    urlParams: ['group_guid'],
    required: ['group_guid']
  }),

  getGroup: bitlyMethod({
    method: 'GET',
    path: 'v4/groups/{group_guid}',
    urlParams: ['group_guid'],
    required: ['group_guid']
  })
});
