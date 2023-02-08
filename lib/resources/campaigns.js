'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  list: bitlyMethod({
    method: 'GET',
    path: 'v4/campaigns',
  }),

  create: bitlyMethod({
    method: 'POST',
    path: 'v4/campaigns'
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/campaigns/{campaign_guid}',
    urlParams: ['campaign_guid'],
    required: ['campaign_guid']
  }),

  update: bitlyMethod({
    method: 'PATCH',
    path: 'v4/campaigns/{campaign_guid}',
    urlParams: ['campaign_guid'],
    required: ['campaign_guid']
  }),

  getChannels: bitlyMethod({
    method: 'GET',
    path: 'v4/channels',
  }),

  createChannel: bitlyMethod({
    method: 'POST',
    path: 'v4/channels',
  }),

  getChannel: bitlyMethod({
    method: 'GET',
    path: 'v4/channels/{channel_guid}',
    urlParams: ['channel_guid'],
    required: ['channel_guid']
  }),

  updateChannel: bitlyMethod({
    method: 'PATCH',
    path: 'v4/channels/{channel_guid}',
    urlParams: ['channel_guid'],
    required: ['channel_guid']
  }),

});
