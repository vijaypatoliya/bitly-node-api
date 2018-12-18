'use strict';

var config = require('../../intialize/config');
var userToken = config.USER_TOKEN;

var chai = require('chai');
var expect = chai.expect;

var bitly = require('../../../lib')(userToken);

describe('GroupsPreferences', function () {
  it('It should get preferences of specific group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    try {
      var response = await bitly.groups.getGroupPreferences(group_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
      expect(response).to.have.property('group_guid').to.be.a('string');
      expect(response).to.have.property('domain_preference').to.be.a('string');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateGroupsPreferences', function () {
  it('It should update preferences of specific group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    var data = {
      domain_preference: 'bit.ly'
    };
    try {
      var response = await bitly.groups.updateGroupPreferences(group_guid, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
      expect(response).to.have.property('group_guid').to.be.a('string');
      expect(response).to.have.property('domain_preference').to.be.a('string');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupBitlinks', function () {
  it('It should get Bitlinks for group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    var data = {
      size: 10
    }
    try {
      var response = await bitly.groups.getGroupBitlinks(group_guid, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CurrentUsedGroupTags', function () {
  it('It should get currently used tags for group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    try {
      var response = await bitly.groups.getCurrentUsedGroupTags(group_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupClickMetricsByCountries', function () {
  it('It should get metrics about the countries referring click traffic rolled up to a Group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    try {
      var response = await bitly.groups.getGroupClickMetricsByCountries(group_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupClickMetricsByReferringNetworks', function () {
  it('It should get metrics about the referring network click traffic rolled up to a Group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    try {
      var response = await bitly.groups.getGroupClickMetricsByReferringNetworks(group_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupShortenCounts', function () {
  it('It should get all the shorten counts for a specific group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    try {
      var response = await bitly.groups.getGroupShortenCounts(group_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('Groups', function () {
  it('It should get groups list ', async function () {
    var data = {
      organization_guid: 'Oibh7yznRDr'
    };
    try {
      var response = await bitly.groups.getGroups(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GroupsSortedBitlinks', function () {
  it('It should get a paginated response for Bitlinks that are sorted for the Group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    var sort = 'clicks';
    var data = {};
    try {
      var response = await bitly.groups.getGroupsSortedBitlinks(group_guid, sort, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateGroup', function () {
  it('It should update the details of a group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    var data = {
      name: 'Patoliya',
      organization_guid: 'Oibh7yznRDr'
    };
    try {
      var response = await bitly.groups.updateGroup(group_guid, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('Group', function () {
  it('It should get details for a group', async function () {
    var group_guid = 'Bibh7CqXlyA';
    try {
      var response = await bitly.groups.getGroup(group_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('Organization', function () {
  it('It should get details for a organization', async function () {
    var organization_guid = 'Oibh7yznRDr';
    try {
      var response = await bitly.organizations.getOrganization(organization_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('Organizations', function () {
  it('It should get list of organizations', async function () {
    try {
      var response = await bitly.organizations.getOrganizations().catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetOrganizationShortenCounts', function () {
  it('It should get all the shorten counts for a specific organization', async function () {
    var organization_guid = 'Oibh7yznRDr';
    try {
      var response = await bitly.organizations.getOrganizationShortenCounts(organization_guid).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateUser', function () {
  it('It should update fields in the user', async function () {
    var data = {
      name: 'patoliya',
      // default_group_guid: 'Bibh7CqXlyA'
    }
    try {
      var response = await bitly.user.updateUser(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('User', function () {
  it('It should get information for the current authenticated user', async function () {
    try {
      var response = await bitly.user.getUser().catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetOAuthApp', function () {
  it('It should get the details for the provided OAuth App client ID', async function () {
    var client_id = 'deaf3dd0e991db18740dc50b4161253251348a20';
    try {
      var response = await bitly.application.getOAuthApp(client_id).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});
