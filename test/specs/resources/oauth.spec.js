'use strict';

var config = require('../../intialize/config');
var clientId = config.clientId;
var clientSecret = config.clientSecret;

var chai = require('chai');
var expect = chai.expect;

var bitly = require('../../../lib')();

describe('Application', function () {

    it('It should get Application OAuth Token', async function () {
        bitly.setApiKey(clientId, clientSecret);

        var options = {
            username: 'patoliya',
            password: 'Password'
        };

        try {
            var response = await bitly.application.getOAuthToken(options);
            console.log('response > ', response);
            bitly.setUserToken(response.access_token);
            expect(response).to.be.a('object');
            expect(response).to.have.property('access_token').to.be.a('string');
        } catch (error) {
            console.log('error ', error);
            expect(response).to.be.a(undefined);
        }

    });
});
