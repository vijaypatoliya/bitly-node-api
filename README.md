# bitly-node-api (Bitly Node Rest API)
[![Build Status](https://travis-ci.org/vijaypatoliya/bitly-node-api.svg?branch=master)](https://travis-ci.org/vijaypatoliya/bitly-node-api) [![Stackoverflow Thread](https://img.shields.io/badge/stackoverflow-bitly--node--api-yellowgreen.svg)](https://stackoverflow.com/search?q=nodejs-bitly-node-api)

This API supported Bitly standard REST API that accepts/returns JSON requests. Here is the [API reference] (https://dev.bitly.com/v4_documentation.html)

You can find [examples of JavaScript and TypeScript](https://github.com/vijaypatoliya/bitly-node-api/tree/master/examples). This will help you for faster implementation of Bitly APIs.

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

## Configuration Using TypeScript
```js
import * as BitlyAPI from 'bitly-node-api';
const bitly = new BitlyAPI();
bitly.setUserToken('YOUR_ACCESS_TOKEN');
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
 
## Examples

#### Bitlinks
    Get Metrics for a Bitlink by countries
    /* Return metrics about the countries referring click traffic to a single Bitlink */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    var data = {
        unit: 'minute'
    }
    try {
        var response = await bitly.bitlinks.getBitlinkMetricsByCountries(bitlink, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Expand a Bitlink
    /* Returns public information for a Bitlink */
    
    bitly.setUserToken(userToken);
    var data = {
        bitlink_id: 'bitly.is/2rAZFZ1'
    }
    try {
        var response = await bitly.bitlinks.getBitlinkPublicInfo(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get Metrics for a Bitlink by referrers
    /* Return metrics about the referrers referring click traffic to a single Bitlink */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    var data = {
        unit: 'minute'
    }
    try {
        var response = await bitly.bitlinks.getBitlinkMetricsByReferrers(bitlink, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Create a Bitlink
    /* Convert a long url to a Bitlink and set additional parameters */
    
    bitly.setUserToken(userToken);
    var data = {
        long_url: 'https://www.google.com'
    }
    try {
        var response = await bitly.bitlinks.createBitlink(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Bitlinks by Group
    /* Retrieve a paginated collection of Bitlinks for a Group */
    
    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    var data = {
        size: 10
    }
    try {
        var response = await bitly.bitlinks.getBitlinksByGroup(group_guid, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get Clicks Summary for a Bitlink
    /* Return the click counts for a specified Bitlink. This rolls up all the data into a single field of clicks */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    var data = {
        unit: 'minute'
    }
    try {
        var response = await bitly.bitlinks.getBitlinkClicksSummary(bitlink, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get Clicks for a Bitlink
    /* Return the click counts for a specified Bitlink. This returns an array with clicks based on a date */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    var data = {
        unit: 'minute'
    }
    try {
        var response = await bitly.bitlinks.getBitlinkClicks(bitlink, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Update a Bitlink
    /* Update fields in the Bitlink */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    var data = {
        title: 'Get Group Preference',
        created_by: 'Patoliya'
    }
    try {
        var response = await bitly.bitlinks.updateBitlink(bitlink, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve a Bitlink
    /* Returns information for a Bitlink */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    try {
        var response = await bitly.bitlinks.getBitlinkInfo(bitlink);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Shorten a Link
    /* Convert a long url to a Bitlink */
    
    bitly.setUserToken(userToken);
    var data = {
        long_url: 'https://www.facebook.com'
    }
    try {
        var response = await bitly.bitlinks.shortenLink(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get Metrics for a Bitlink by referrers by domain
    /* Group referrers metrics about a single Bitlink */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    var data = {
        unit: 'minute'
    }
    try {
        var response = await bitly.bitlinks.getBitlinkMetricsByReferrersByDomain(bitlink, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Sorted Bitlinks for Group
    /* Retrieve a paginated response for Bitlinks that are sorted for the Group */
    
    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    var sort = 'clicks';
    var data = {
        size: 10
    }
    try {
        var response = await bitly.bitlinks.getGroupSortedBitlinks(group_guid, sort, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get Metrics for a Bitlink by referring domains
    /* Rollup the click counts to a referrer about a single Bitlink */
    
    bitly.setUserToken(userToken);
    var bitlink = 'bitly.is/2rAZFZ1';
    var data = {
        size: 10
    }
    try {
        var response = await bitly.bitlinks.getBitlinkMetricsByReferringDomains(bitlink, data);
    } catch (error) {
        return;
    }

#### Retrieve OAuth App
**Retrieve the details for the provided OAuth App client ID**

    bitly.setUserToken(userToken);
    var client_id = 'deaf3dd0e991db18740dc50b4161253251348a20';
    try {
        var response = bitly.application.getOAuthApp(client_id);
    } catch (error) {
        return;
    }
    
#### Groups 
    Retrieve Group Preferences
    /* Retrieve preferences for a specific group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    try {
        var response = await bitly.groups.getGroupPreferences(group_guid);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Update Group Preferences
    /* Retrieve preferences for a specific group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    try {
        var response = await bitly.groups.getGroupPreferences(group_guid);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Bitlinks by Group
    /* Retrieve a paginated collection of Bitlinks for a Group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    var data = {
        size: 10
    }
    try {
        var response = await bitly.groups.getGroupBitlinks(group_guid, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Tags by Group
    /* Retrieve the currently used tags for a group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    try {
        var response = await bitly.groups.getCurrentUsedGroupTags(group_guid);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get Click Metrics for a Group by countries
    /* Return metrics about the countries referring click traffic rolled up to a Group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    try {
        var response = await bitly.groups.getGroupClickMetricsByCountries(group_guid);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get Click Metrics for a Group by referring networks
    /* Return metrics about the referring network click traffic rolled up to a Group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    try {
        var response = await bitly.groups.getGroupClickMetricsByReferringNetworks(group_guid);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Group Shorten Counts
    /* Get all the shorten counts for a specific group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    try {
        var response = await bitly.groups.getGroupShortenCounts(group_guid);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Groups
    /* Retrieve a list of Groups */

    bitly.setUserToken(userToken);
    var data = {};
    try {
        var response = await bitly.groups.getGroups(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Sorted Bitlinks for Group
    /* Retrieve a paginated response for Bitlinks that are sorted for the Group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    var sort = 'clicks';
    var data = {};
    try {
        var response = await bitly.groups.getGroupsSortedBitlinks(group_guid, sort, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Update a Group
    /* Update the details of a group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    var data = {
        name: 'Patoliya'
    };
    try {
        var response = await bitly.groups.updateGroup(group_guid, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve a Group
    /* Retrive details for a group */

    bitly.setUserToken(userToken);
    var group_guid = 'Bibh7CqXlyA';
    try {
        var response = await bitly.groups.getGroup(group_guid);
    } catch (error) {
        return;
    }
    
#### Organizations
    Retrieve an Organization
    /* Retrive details for an organization */
    
    bitly.setUserToken(userToken);
    var organization_guid = 'Oibh7yznRDr';
    try {
        var response = await bitly.organizations.getOrganization(organization_guid);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Organizations
    /* Retrieve a list of organizations */
    
    bitly.setUserToken(userToken);
    try {
        var response = await bitly.organizations.getOrganizations();
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve Organization Shorten Counts
    /* Retrieve all the shorten counts for a specific organization */
    
    bitly.setUserToken(userToken);
    var organization_guid = 'Oibh7yznRDr';
    try {
        var response = await bitly.organizations.getOrganizationShortenCounts(organization_guid);
    } catch (error) {
        return;
    }
    
#### User
    Update a User
    /* Update fields in the user */
    
    bitly.setUserToken(userToken);
    var data = {
        name: 'patoliya',
        default_group_guid: 'Bibh7CqXlyA'
    }
    try {
        var response = await bitly.user.updateUser(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Retrieve a User
    /* Retrive information for the current authenticated user */
    
    bitly.setUserToken(userToken);
    try {
        var response = await bitly.user.getUser();
    } catch (error) {
        return;
    }
    