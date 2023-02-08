'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

  list: bitlyMethod({
    method: 'GET',
    path: 'v4/organizations/{organization_guid}/webhooks',
    urlParams: ['organization_guid'],
    required: ['organization_guid']
  }),

  create: bitlyMethod({
    method: 'POST',
    path: 'v4/webhooks',
  }),

  get: bitlyMethod({
    method: 'GET',
    path: 'v4/webhooks/{webhook_guid}',
    urlParams: ['webhook_guid'],
    required: ['webhook_guid']
  }),

  update: bitlyMethod({
    method: 'PATCH',
    path: 'v4/webhooks/{webhook_guid}',
    urlParams: ['webhook_guid'],
    required: ['webhook_guid']
  }),

  delete: bitlyMethod({
    method: 'DELETE',
    path: 'v4/webhooks/{webhook_guid}',
    urlParams: ['webhook_guid'],
    required: ['webhook_guid']
  }),

  verify: bitlyMethod({
    method: 'POST',
    path: 'v4/organizations/{webhook_guid}/verify',
    urlParams: ['webhook_guid'],
    required: ['webhook_guid']
  })
});
