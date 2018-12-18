// Type definitions for bitly-node-api

declare class BaseClient {

}

declare class Application extends BaseClient {

  getOAuthToken(params: any): Promise<any>;
  getOAuthApp(client_id: string): Promise<any>;

}

declare class Groups extends BaseClient {

  getGroupPreferences(group_guid: string): Promise<any>;
  updateGroupPreferences(group_guid: string, params: any): Promise<any>;
  getGroupBitlinks(group_guid: string, params: any): Promise<any>;
  getCurrentUsedGroupTags(group_guid: string): Promise<any>;
  getGroupClickMetricsByCountries(group_guid: string): Promise<any>;
  getGroupClickMetricsByReferringNetworks(group_guid: string): Promise<any>;
  getGroupShortenCounts(group_guid: string): Promise<any>;
  getGroups(params: any): Promise<any>;
  getGroupsSortedBitlinks(group_guid: string, sort: string, params: any): Promise<any>;
  updateGroup(group_guid: string, params: any): Promise<any>;
  getGroup(group_guid: string): Promise<any>;

}

declare class Organizations extends BaseClient {

  getOrganization(organization_guid: string): Promise<any>;
  getOrganizations(): Promise<any>;
  getOrganizationShortenCounts(organization_guid: string): Promise<any>;

}

declare class User extends BaseClient {

  updateUser(params: any): Promise<any>;
  getUser(): Promise<any>;

}

declare class Bitlinks extends BaseClient {

  getBitlinkMetricsByCountries(bitlink: string, params: any): Promise<any>;
  getBitlinkPublicInfo(params: any): Promise<any>;
  getBitlinkMetricsByReferrers(bitlink: string, params: any): Promise<any>;
  createBitlink(params: any): Promise<any>;
  getBitlinksByGroup(group_guid: string, params: any): Promise<any>;
  getBitlinkClicksSummary(bitlink: string, params: any): Promise<any>;
  getBitlinkClicks(bitlink: string, params: any): Promise<any>;
  updateBitlink(bitlink: string, params: any): Promise<any>;
  getBitlinkInfo(bitlink: string): Promise<any>;
  shortenLink(params: any): Promise<any>;
  getBitlinkMetricsByReferrersByDomain(bitlink: string, params: any): Promise<any>;
  getGroupSortedBitlinks(group_guid: string, sort: string, params: any): Promise<any>;
  getBitlinkMetricsByReferringDomains(bitlink: string, params: any): Promise<any>;

}

declare class bitlyNodeClient {

  constructor()

  constructor(clientId: string, clientSecret: string);

  setApiKey(clientId: string, clientSecret: string): void;

  setHost(host?: string, port?: string, protocol?: string): void;

  setUserToken(userToken: string): void;

  application: Application;
  groups: Groups;
  organizations: Organizations;
  user: User;
  bitlinks: Bitlinks;
}

declare namespace bitlyNodeClient {

}
export = bitlyNodeClient;