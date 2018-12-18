# bitly-node-api (Bitly Node Rest API)
[![Build Status](https://travis-ci.org/vijaypatoliya/bitly-node-api.svg?branch=master)](https://travis-ci.org/vijaypatoliya/meetup-node) [![Stackoverflow Thread](https://img.shields.io/badge/stackoverflow-bitly--node-yellowgreen.svg)](https://stackoverflow.com/search?q=nodejs-bitly-node-api)

This API supported Bitly standard REST API that accepts/returns JSON requests. Here is the [API reference] (https://dev.bitly.com/v4_documentation.html)

##### It does supports EcmaScript 5, EcmaScript 6,  EcmaScript 8, TypeScript, async-await, Promises, Callback!!!
##### It does also supports for AWS Lambda like serverless cloud function call.
##### It supports pure JSON response.
##### All methods support Promise and Callback both.

## Get started
Using the Bitly API wrapper for Node.js is really simple.
Given that you already have a Node.js project with NPM setup just follow these steps:

**Install the dependency**
```
npm install --save bitly-node-api
```

## Configuration Using JavaScript

**Already you having access token then use below configuration**
```bash
export BITLY_USER_TOKEN=ACCESS_TOKEN
```

```js
var bitly = require('bitly-node-api')('YOUR_ACCESS_TOKEN');
```

**If you have not access token, Get access token using below configuration and example**

```js
var bitly = require('bitly-node-api');

bitly.setApiKey(clientId, clientSecret);

var options = {
  username: 'Username',
  password: 'Password'
};
var response = bitly.application.getOAuthToken(options);
if(response && response.access_token) {
  bitly.setUserToken(response.access_token);
}
```

## Test Cases
```bash
npm run test.mocha
```

## Debugging
```bash
export DEBUG=bitly:*
```

```
Originally by [Vijay Patoliya](https://github.com/vijaypatoliya) (osi.vijay@gmail.com).
```
 