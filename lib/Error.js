'use strict';

var debug = require('debug')('bitly:Error');
var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error Class to wrap any errors returned by bitly-node-api
 */
function _Error() {
    this.populate.apply(this, arguments);
    var stack = (new Error(this.message)).stack;
    debug('stack ', stack);
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function (type, message) {
    this.Type = type;
    this.Message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error class
 * (Specifically for errors returned from bitly's REST API)
 */
var bitlyError = _Error.bitlyError = _Error.extend({
    Type: 'bitlyError',
    Message: '',
    populate: function (raw) {
        this.Type = this.type || 'unknown';
        this.Code = raw.Code || 'GenericError';
        this.Message = raw.message || raw.error || 'unknown';
        this.StatusCode = raw.StatusCode || 'unknown';
    }
});

/**
 * Helper factory which takes raw bitly errors and outputs wrapping instances
 */
bitlyError.generate = function () {
    return new _Error('Generic', 'Unknown Error');
};

// Specific bitly Error types:
_Error.bitlyInvalidRequestError = bitlyError.extend({type: 'bitlyInvalidRequestError'});
_Error.bitlyAPIError = bitlyError.extend({type: 'bitlyAPIError'});
_Error.bitlyPermissionError = bitlyError.extend({type: 'bitlyPermissionError'});
_Error.bitlyRateLimitError = bitlyError.extend({type: 'bitlyRateLimitError'});
_Error.bitlyConnectionError = bitlyError.extend({type: 'bitlyConnectionError'});
