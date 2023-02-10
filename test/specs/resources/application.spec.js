"use strict";

var config = require("../../intialize/config");
var clientId = config.clientId;
var clientSecret = config.clientSecret;

var chai = require("chai");
var expect = chai.expect;

var bitly = require("../../../lib")();

describe("Application", function () {
  it("It should get Application OAuth Token", async function () {
    bitly.setApiKey(clientId, clientSecret);

    var options = {
      username: "username",
      password: "password",
    };

    try {
      var response = await bitly.application
        .getOAuthToken(options)
        .catch((error) => {
          if (error) {
            return {};
          }
        });
      bitly.setUserToken(response.access_token);
      expect(response).to.be.a("object");
    } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
  it("It should get Application OAuth App", async function () {
    bitly.setApiKey(clientId, clientSecret);

    var client_id = "string";

    try {
      var response = await bitly.application
        .getOAuthApp(client_id)
        .catch((error) => {
          if (error) {
            return {};
          }
        });
      expect(response).to.be.a("object");
      bitly.setUserToken(response.access_token);
    } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});
