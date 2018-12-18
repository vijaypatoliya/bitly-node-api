'use strict';

var bitlyResource = require('../Resource');
var bitlyMethod = bitlyResource.methods.bitlyMethod;

module.exports = bitlyResource.extend({

    getOAuthToken: bitlyMethod({
        authorization: 'Basic',
        method: 'POST',
        path: 'oauth/access_token'
    }),

    getOAuthApp: bitlyMethod({
      method: 'GET',
      path: 'v4/apps/{client_id}',
      urlParams: ['client_id'],
      required: ['client_id']
    })

});
