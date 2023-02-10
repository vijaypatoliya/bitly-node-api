'use strict';

// var debug = require('debug')('bitly:bitly-node-api-index');
bitly.DEFAULT_HOST = 'api-ssl.bitly.com';
bitly.DEFAULT_PORT = '443';
bitly.DEFAULT_BASE_PATH = '/';
bitly.DEFAULT_RESPONSE_FORMAT = '.json';
bitly.DEFAULT_API_VERSION = 'v4';

// Use node's default timeout:
bitly.DEFAULT_TIMEOUT = require('http').createServer().timeout;

bitly.PACKAGE_VERSION = require('../package.json').version;

var resources = {
  application: require('./resources/application'),
  bitlinks: require('./resources/bitlinks'),
  bsds: require('./resources/bsds'),
  campaigns: require('./resources/campaigns'),
  customBitlinks: require('./resources/customBitlinks'),
  groups: require('./resources/groups'),
  organizations: require('./resources/organizations'),
  user: require('./resources/user'),
  webhooks: require('./resources/webhooks'),
};

bitly.bitlyResource = require('./Resource');
bitly.resources = resources;

function bitly(clientAccessToken) {
  if (!(this instanceof bitly)) {
    return new bitly(clientAccessToken);
  }

  this._api = {
    auth: null,
    host: bitly.DEFAULT_HOST,
    port: bitly.DEFAULT_PORT,
    basePath: bitly.DEFAULT_BASE_PATH,
    version: bitly.DEFAULT_API_VERSION,
    timeout: bitly.DEFAULT_TIMEOUT
  };

  this._prepResources();
  this.setUserToken(clientAccessToken);
  this.setResponseFormat(bitly.DEFAULT_RESPONSE_FORMAT);
}

bitly.prototype = {

  setHost: function (host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function (protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort: function (port) {
    this._setApiField('port', port);
  },

  setResponseFormat: function (format) {
    this._setApiField('format', format);
  },

  setApiKey: function (accessKey, accessSecret) {
    if (accessKey) {
      this._setApiField('key', accessKey);
    }
    if (accessSecret) {
      this._setApiField('secret', accessSecret);
    }
  },

  setUserToken: function (token) {
    if (token) {
      this._setApiField('userToken', token);
    }
  },

  setTimeout: function (timeout) {
    this._setApiField('timeout', timeout === null ? bitly.DEFAULT_TIMEOUT : timeout);
  },

  _setApiField: function (key, value) {
    this._api[key] = value;
  },

  getApiField: function (key) {
    return this._api[key];
  },

  _prepResources: function () {
    for (var name in resources) {
      this[name[0].toLowerCase() + name.substring(1)] = new resources[name](this);
    }
  }
};

module.exports = bitly;

module.exports.bitly = bitly;
