# bitly-node-api (Bitly Node Rest API)

[![Build Status](https://travis-ci.org/vijaypatoliya/bitly-node-api.svg?branch=master)](https://travis-ci.org/vijaypatoliya/bitly-node-api) [![Stackoverflow Thread](https://img.shields.io/badge/stackoverflow-bitly--node--api-yellowgreen.svg)](https://stackoverflow.com/search?q=nodejs-bitly-node-api)

This API supported Bitly standard REST API that accepts/returns JSON requests. Here is the [API reference](https://dev.bitly.com/v4_documentation.html)

You can find [examples of JavaScript and TypeScript](https://github.com/vijaypatoliya/bitly-node-api/tree/master/examples). This will help you for faster implementation of Bitly APIs.

##### It does supports EcmaScript 5, EcmaScript 6, EcmaScript 8, TypeScript, async-await, Promises, Callback!!!

##### It does also supports for AWS Lambda like serverless cloud function call.

##### It supports pure JSON response.

##### All methods support Promise and Callback both.

##### Please Feel free to create issue for any help!

##### All developers/contributors are requested to open Pull Request/Merge Request on develop branch. 

##### Please make sure Test Cases be passed. 

## Get started

Using the Bitly API wrapper for Node.js is really simple.
Given that you already have a Node.js project with NPM setup just follow these steps:

## Installation
```bash
npm install bitly-node-api --save
```

## Pull Request
- Contributors can send their Pull Request to `develop` branch.
- Kindly validate test cases & linting before opening new PR.

## Do you need an expert?
Are you finding a developer or team for your world-class enterprise product development? If yes, please send email to. Submit your project request [here](mailto:osi.vijay@gmail.com). Originally by [Vijay Patoliya](https://github.com/vijaypatoliya).

## Configuration Using JavaScript

**Already you having access token then use below configuration**

```bash
export BITLY_USER_TOKEN=ACCESS_TOKEN
```

```js
var bitly = require("bitly-node-api")("YOUR_ACCESS_TOKEN");
```

**If you don't have access token then get access token using below configuration and example**

```js
var bitly = require("bitly-node-api");

bitly.setApiKey(clientId, clientSecret);

var options = {
  username: "Username",
  password: "Password",
};
var response = bitly.application.getOAuthToken(options);
if (response && response.access_token) {
  bitly.setUserToken(response.access_token);
}
```

## Configuration Using TypeScript

```js
import * as BitlyAPI from "bitly-node-api";
const bitly = new BitlyAPI();
bitly.setUserToken("YOUR_ACCESS_TOKEN");
```


```
Originally by osi.vijay@gmail.com : [Vijay Patoliya](https://github.com/vijaypatoliya).
```

## Examples

1. [BITLINKS](#bitlinks)

2. [BSDS](#bsds)

3. [CAMPAIGNS](#campaigns)

4. [CUSTOM BITLINKS](#custom-bitlinks)

5. [GROUPS](#groups)

6. [ORGANIZATIONS](#organizations)

7. [USER](#user)

8. [WEBHOOKS](#webhooks)

---

> ### [BITLINKS](#index)

```js
/** Bulk update */
var group_guid = "string";

var payload = {
  action: "string",
  archive: "boolean",
  add_tags: ["array of string"],
  remove_tags: ["array of string"],
  links: ["array of string"],
};
try {
  var response = await bitly.bitlinks.bulkUpdate(group_guid, payload);
} catch (error) {
  return;
}
```

```js
/** Create */
var payload = {
  long_url: "https://www.google.com",
};
try {
  var response = await bitly.bitlinks.create(payload);
} catch (error) {
  return;
}
```

```js
/** Create QR */

var bitlink = "bitly.is/2rAZFZ1";

var payload = {
  color: "string",
  exclude_bitly_logo: "boolean",
  image_format: "string",
  logo_image_guid: "string",
};

try {
  var response = await bitly.bitlinks.createQR(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Delete */

var bitlink = "bitly.is/2rAZFZ1";

try {
  var response = await bitly.bitlinks.delete(bitlink);
} catch (error) {
  return;
}
```

```js
/** Expand */
var bitlink = "bitly.is/2rAZFZ1";
try {
  var response = await bitly.bitlinks.expand(bitlink);
} catch (error) {
  return;
}
```

```js
/** Get */

var bitlink = "bitly.is/2rAZFZ1";
try {
  var response = await bitly.bitlinks.get(bitlink);
} catch (error) {
  return;
}
```

```js
/** Get by group */
var group_guid = "Bibh7CqXlyA";
var payload = {
  size: "number",
  page: "number",
  keyword: "string",
  query: "string",
  created_before: "number",
  created_after: "number",
  modified_after: "number",
  archived: "string",
  deeplinks: "string",
  domain_deeplinks: "string",
  campaign_guid: "string",
  channel_guid: "string",
  custom_bitlink: "string",
  tags: "array",
  launchpad_ids: "array",
  encoding_login: "array",
};
try {
  var response = await bitly.bitlinks.getByGroup(group_guid, payload);
} catch (error) {
  return;
}
```

```js
/** Get clicks */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  units: "integer",
  unit: "string",
  unit_reference: "string",
};

try {
  var response = await bitly.bitlinks.getClicks(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Get clicks summary */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  units: "integer",
  unit: "string",
  unit_reference: "string",
};

try {
  var response = await bitly.bitlinks.getClicksSummary(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Get metrics by city */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  unit: "minute",
};
try {
  var response = await bitly.bitlinks.getMetricsByCity(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Get metrics by country */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  units: "number",
  unit: "string",
  size: "number",
  unit_reference: "string",
};

try {
  var response = await bitly.bitlinks.getMetricsByCountry(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Get Metrics by device type */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  units: "number",
  unit: "string",
  size: "number",
  unit_reference: "string",
};

try {
  var response = await bitly.bitlinks.getMetricsByDeviceType(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Get metrics by referrers */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  units: "number",
  unit: "string",
  size: "number",
  unit_reference: "string",
};

try {
  var response = await bitly.bitlinks.getMetricsByReferrers(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Get metrics by referrers domain */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  units: "number",
  unit: "string",
  size: "number",
  unit_reference: "string",
};

try {
  var response = await bitly.bitlinks.getMetricsByReferrersDomain(
    bitlink,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Get metrics by referring domain */

var bitlink = "bitly.is/2rAZFZ1";
var payload = {
  units: "number",
  unit: "string",
  size: "number",
  unit_reference: "string",
};

try {
  var response = await bitly.bitlinks.getMetricsByReferringDomain(
    bitlink,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Get QR */

var bitlink = "bitly.is/2rAZFZ1";
try {
  var response = await bitly.bitlinks.getQR(bitlink);
} catch (error) {
  return;
}
```

```js
/** List sorted by group */

var group_guid = "Bibh7CqXlyA";
var sort = "clicks";
var payload = {
  size: 10,
};
try {
  var response = await bitly.bitlinks.listSortedByGroup(
    group_guid,
    sort,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** shorted link */

var group_guid = "string";
var sort = "string";

var payload = {
  unit: "string",
  units: "number",
  unit_reference: "string",
  size: "number",
};

try {
  var response = await bitly.bitlinks.shortedLink(group_guid, sort, payload);
} catch (error) {
  return;
}
```

```js
/** Update */

var bitlink = "bitly.is/2rAZFZ1";

var payload = {
  references: {
    /* any */
  },
  link: "string",
  id: "string",
  long_url: "string",
  title: "string",
  archived: "boolean",
  created_at: "string",
  created_by: "string",
  client_id: "string",
  custom_bitlinks: ["string"],
  tags: ["string"],
  launchpad_ids: ["string"],
  deeplinks: [
    {
      guid: "string",
      bitlink: "string",
      app_uri_path: "string",
      install_url: "string",
      app_guid: "string",
      os: "string",
      install_type: "string",
      created: "string",
      modified: "string",
      brand_guid: "string",
    },
  ],
  is_deleted: "boolean",
};

try {
  var response = await bitly.bitlinks.update(bitlink, payload);
} catch (error) {
  return;
}
```

```js
/** Update QR */

var bitlink = "bitly.is/2rAZFZ1";

var payload = {
  color: "string",
  exclude_bitly_logo: "boolean",
  image_format: "string",
  logo_image_guid: "string",
};

try {
  var response = await bitly.bitlinks.updateQR(bitlink, payload);
} catch (error) {
  return;
}
```

> ### [BSDS](#index)

```js
/** Get group overrides */

var group_guid = "string";
var payload = {
  group_guid: ["array"],
  created_after: "number",
  limit: "number",
  offset: "number",
  bsd: ["array"],
};

try {
  var response = await bitly.bsds.getGroupOverrides(group_guid, payload);
} catch (error) {
  return;
}
```

```js
/** List */

try {
  var response = await bitly.bsds.list();
} catch (error) {
  return;
}
```

> ### [CAMPAIGNS](#index)

```js
/** Create */
var payload = {
  group_guid: "string",
  name: "string",
  description: "string",
  channel_guids: ["array of string"],
};

try {
  var response = await bitly.campaigns.create(payload);
} catch (error) {
  return;
}
```

```js
/** Create channel */
var payload = {
  name: "string",
  guid: "string",
  creted: "string",
  modified: "string",
  group_guid: "string",
  bitlinks: [
    {
      campaign_guid: "string",
      bitlink_id: "string",
    },
  ],
};

try {
  var response = await bitly.campaigns.createChannel(payload);
} catch (error) {
  return;
}
```

```js
/** Get */

try {
  var response = await bitly.campaigns.get(campaign_guid);
} catch (error) {
  return;
}
```

```js
/** Get channel */

var channel_guid = "string";
try {
  var response = await bitly.campaigns.getChannel(channel_guid);
} catch (error) {
  return;
}
```

```js
/** List */
try {
  var payload = {
    group_guid: "string",
  };

  var response = await bitly.campaigns.list(payload);
} catch (error) {
  return;
}
```

```js
/** List channels */
var payload = {
  group_guid: "string",
  campaign_guid: "string",
};
try {
  var response = await bitly.campaigns.listChannels(payload);
} catch (error) {
  return;
}
```

```js
/** Update */

var campaign_guid = "string";
var payload = {
  group_guid: "string",
  name: "string",
  description: "string",
  channel_guids: ["array of string"],
};

try {
  var response = await bitly.campaigns.update(campaign_guid, payload);
} catch (error) {
  return;
}
```

```js
/** Update channel */

var channel_guid = "string";

var payload = {
  name: "string",
  guid: "string",
  creted: "string",
  modified: "string",
  group_guid: "string",
  bitlinks: [
    {
      campaign_guid: "string",
      bitlink_id: "string",
    },
  ],
};

try {
  var response = await bitly.campaigns.updateChannel(channel_guid, payload);
} catch (error) {
  return;
}
```

> ### [CUSTOM BITLINKS](#index)

```js
/** Add */
var payload = {
  custom_bitlink: "https://www.google.com",
  bitlink_id: "string",
};
try {
  var response = await bitly.customBitlinks.add(payload);
} catch (error) {
  return;
}
```

```js
/** Get */

var custom_bitlink = "string";
try {
  var response = await bitly.customBitlinks.get(custom_bitlink);
} catch (error) {
  return;
}
```

```js
/** Get click for entire history */

var custom_bitlink = "string";
var payload = {
  units: "integer",
  unit: "string",
  unit_reference: "string",
};

try {
  var response = await bitly.customBitlinks.getClicksForEntireHistory(
    custom_bitlink,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Get metrics for custom destination  */
var custom_bitlink = "string";
var payload = {
  units: "integer",
  unit: "string",
  unit_reference: "string",
};

try {
  var response = await bitly.customBitlinks.getMetricsForCustomDestination(
    custom_bitlink,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Update */

var custom_bitlink = "bitly.is/2rAZFZ1";

var payload = {
  bitlink_id: "string",
};

try {
  var response = await bitly.customBitlinks.update(custom_bitlink, payload);
} catch (error) {
  return;
}
```

> ### [GROUPS](#index)

```js
/** Get */

var group_guid = "string";

try {
  var response = await bitly.groups.get(group_guid);
} catch (error) {
  return;
}
```

```js
/** Get click metrics by city */

var group_guid = "string";
var payload = {
  unit: "string",
  units: "number",
  size: "number",
  unit_reference: "string",
};
try {
  var response = await bitly.groups.getClickMetricsByCity(group_guid, payload);
} catch (error) {
  return;
}
```

```js
/** Get click metrics by country */

var group_guid = "string";
var payload = {
  unit: "string",
  units: "number",
  size: "number",
  unit_reference: "string",
};

try {
  var response = await bitly.groups.getClickMetricsByCountry(
    group_guid,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Get click metrics by device type */

var group_guid = "string";
var payload = {
  unit: "string",
  units: "number",
  size: "number",
  unit_reference: "string",
};
try {
  var response = await bitly.groups.getClickMetricsByDeviceType(
    group_guid,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Get click metrics by referring networks */

var group_guid = "string";

try {
  var response = await bitly.groups.getClickMetricsByReferringNetworks(
    group_guid
  );
} catch (error) {
  return;
}
```

```js
/** Get clicks */

var group_guid = "string";

try {
  var response = await bitly.groups.getClicks(group_guid);
} catch (error) {
  return;
}
```

```js
/** Get preferences */

var group_guid = "string";
try {
  var response = await bitly.groups.getPreferences(group_guid);
} catch (error) {
  return;
}
```

```js
/** Get QR */

var group_guid = "string";

try {
  var response = await bitly.groups.getQR(group_guid);
} catch (error) {
  return;
}
```

```js
/** Get shorten counts */

var group_guid = "string";
var payload = {
  unit: "string",
  units: "number",
  unit_reference: "string",
};
try {
  var response = await bitly.groups.getShortenCounts(group_guid, payload);
} catch (error) {
  return;
}
```

```js
/** Get list */
var payload = {
  organization_guid: "string",
};
try {
  var response = await bitly.groups.list(payload);
} catch (error) {
  return;
}
```

```js
/** Get list tags */

var group_guid = "string";
try {
  var response = await bitly.groups.listTags(group_guid);
} catch (error) {
  return;
}
```

```js
/** update */
var group_guid = "Bibh7CqXlyA";
var payload = {
  name: "string",
  organization_guid: "string",
  bsds: ["string"],
};

try {
  var response = await bitly.groups.update(group_guid, payload);
} catch (error) {
  return;
}
```

```js
/** Update preferences */

var group_guid = "string";
var payload = {
  group_guid: "string",
  domain_preference: "bit.ly",
};

try {
  var response = await bitly.groups.updatePreferences(group_guid, payload);
} catch (error) {
  return;
}
```

> ### [ORGANIZATIONS](#index)

```js
/** Get */

var organization_guid = "string";

try {
  var response = await bitly.organizations.get(organization_guid);
} catch (error) {
  return;
}
```

```js
/** Get plan limits */
var organization_guid = "string";
try {
  var response = await bitly.organizations.getPlanLimits(organization_guid);
} catch (error) {
  return;
}
```

```js
/** Get shorten Counts */

var organization_guid = "string";

var payload = {
  unit: "string",
  units: "number",
  unit_reference: "string",
};

try {
  var response = await bitly.organizations.getShortenCounts(
    organization_guid,
    payload
  );
} catch (error) {
  return;
}
```

```js
/** List */
try {
  var response = await bitly.organizations.list();
} catch (error) {
  return;
}
```

> ### [USER](#index)

```js
/** Get */
try {
  var response = await bitly.user.get();
} catch (error) {
  return;
}
```

```js
/** Get platform limits */
var payload = {
  path: "string",
};

try {
  var response = await bitly.user.getPlatformLimits(payload);
} catch (error) {
  return;
}
```

```js
/** Update */

var payload = {
  name: "string",
  default_group_guid: "string",
};

try {
  var response = await bitly.user.update(payload);
} catch (error) {
  return;
}
```

> ### [WEBHOOKS](#index)

```js
/** Create */

var payload = {
  organization_guid: "string",
  name: "string",
  event: "string",
  url: "string",
  is_active: "boolean",
  group_guid: "string",
  oauth_url: "string",
  client_id: "string",
  client_secret: "string",
  fetch_tags: "boolean",
};

try {
  var response = await bitly.webhooks.create(payload);
} catch (error) {
  return;
}
```

```js
/** Delete */
var webhook_guid = "string";
try {
  var response = await bitly.webhooks.delete(webhook_guid);
} catch (error) {
  return;
}
```

```js
/** Get */
try {
  var response = await bitly.webhooks.get(webhook_guid);
} catch (error) {
  return;
}
```

```js
/** List */

try {
  var organigation_guid = "string";

  var response = await bitly.webhooks.list(organigation_guid);
} catch (error) {
  return;
}
```

```js
/** Update */

var webhook_guid = "string";
var payload = {
  guid: "string",
  organization_guid: "string",
  name: "string",
  event: "string",
  url: "string",
  is_active: "boolean",
  group_guid: "string",
  oauth_url: "string",
  client_id: "string",
  client_secret: "string",
  fetch_tags: "boolean",
};

try {
  var response = await bitly.webhooks.update(webhook_guid, payload);
} catch (error) {
  return;
}
```

```js
/** Verify */

var webhook_guid = "string";
try {
  var response = await bitly.webhooks.verify(webhook_guid);
} catch (error) {
  return;
}
```
