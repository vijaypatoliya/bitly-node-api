'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  add: bitlyMethod({
    method: 'POST',
    path: 'v4/custom_bitlinks'
  }),

  update: bitlyMethod({
    method: 'PATCH',
    path: 'v4/custom_bitlinks/{custom_bitlink}',
    urlParams: ['custom_bitlink'],
    required: ['custom_bitlink']
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/custom_bitlinks/{custom_bitlink}',
    urlParams: ['custom_bitlink'],
    required: ['custom_bitlink']
  }),

  getMetrics: bitlyMethod({
    method: 'GET',
    path: 'v4/custom_bitlinks/{custom_bitlink}/clicks_by_destination',
    urlParams: ['custom_bitlink'],
    required: ['custom_bitlink']
  }),

  getClicks: bitlyMethod({
    method: 'GET',
    path: 'v4/custom_bitlinks/{custom_bitlink}/clicks',
    urlParams: ['custom_bitlink'],
    required: ['custom_bitlink']
  }),

});
