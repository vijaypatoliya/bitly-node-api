// Type definitions for bitly-node-api

declare class BaseClient {

}

declare class Application extends BaseClient {

  getOAuthApp(client_id: string): Promise<any>;
  getOAuthToken(options: { username: string, password: string }): Promise<any>;

}

declare class Bitlinks extends BaseClient {
  
  bulkUpdate(group_guid: string, payload: any): Promise<any>;
  create(payload: any): Promise<any>;
  createQR(bitlink: string, payload: any): Promise<any>;
  delete(bitlink: string): Promise<any>;
  expand(bitlink: string): Promise<any>;
  get(bitlink: string): Promise<any>;
  getByGroup(group_guid: string, payload: any): Promise<any>;
  getClicks(bitlink: string, payload: any): Promise<any>;
  getClicksSummary(bitlink: string, payload: any): Promise<any>;
  getMetricsByCity(bitlink: string, payload: any): Promise<any>;
  getMetricsByCountry(bitlink: string, payload: any): Promise<any>;
  getMetricsByDeviceType(bitlink: string, payload: any): Promise<any>;
  getMetricsByReferres(bitlink: string, payload: any): Promise<any>;
  getMetricsByReferresDomain(bitlink: string, payload: any): Promise<any>;
  getMetricsByReferringDomain(bitlink: string, payload: any): Promise<any>;
  getQR(bitlink: string): Promise<any>;
  listSortedForGroup(group_guid: string, sort: string, payload: any): Promise<any>;
  shortenLink(payload: any): Promise<any>;
  update(bitlink: string, payload: any): Promise<any>;
  updateQR(bitlink: string, payload: any): Promise<any>;

}

declare class Bsds extends BaseClient {
  getGroupOverrides(group_guid: string, payload: any): Promise<any>;
  list(): Promise<any>;
}

declare class Campaigns extends BaseClient {
  create(payload: any): Promise<any>;
  createChannel(payload: any): Promise<any>;
  get(campaign_guid: string): Promise<any>;
  getChannel(channel_guid: string): Promise<any>;
  list(payload: any): Promise<any>;
  listChannels(payload: any): Promise<any>;
  update(campaign_guid: string, payload: any): Promise<any>;
  updateChannel(channel_guid: string, payload: any): Promise<any>;
}

declare class CustomBitlinks extends BaseClient {
  add(payload: any): Promise<any>;
  get(custom_bitlink: string): Promise<any>;
  getClicks(custom_bitlink: string, payload: any): Promise<any>;
  getMetrics(custom_bitlink: string, payload: any): Promise<any>;
  update(custom_bitlink: string, payload: any): Promise<any>;
}

declare class Groups extends BaseClient {

  get(group_guid: string): Promise<any>;
  getClickMetricsByCity(group_guid: string, payload: any): Promise<any>;
  getClickMetricsByCountry(group_guid: string, payload: any): Promise<any>;
  getClickMetricsByDeviceType(group_guid: string, payload: any): Promise<any>;
  getClickMetricsByReferringNetworks(group_guid: string, payload: any): Promise<any>;
  getClicks(group_guid: string): Promise<any>;
  getPreferences(group_guid: string): Promise<any>;
  getQR(group_guid: string): Promise<any>;
  getShortenCounts(group_guid: string, payload: any): Promise<any>;
  list(payload: any): Promise<any>;
  listTags(group_guid: string): Promise<any>;
  update(group_guid: string, payload: any): Promise<any>;
  updatePreferences(group_guid: string, payload: any): Promise<any>;

}

declare class Organizations extends BaseClient {

  get(organization_guid: string): Promise<any>;
  getPlanLimits(organization_guid: string): Promise<any>;
  getShortenCounts(organization_guid: string, payload: any): Promise<any>;
  list(): Promise<any>;

}

declare class User extends BaseClient {

  get(): Promise<any>;
  getPlatformLimits(payload: any): Promise<any>;
  update(payload: any): Promise<any>;

}

declare class Webhooks extends BaseClient {

  create(payload: any): Promise<any>;
  delete(webhook_guid: string): Promise<any>;
  get(webhook_guid: string): Promise<any>;
  list(organigation_guid: string): Promise<any>;
  update(webhook_guid: string, payload: any): Promise<any>;
  verify(webhook_guid: string): Promise<any>;

}


declare class bitlyNodeClient {

  constructor()

  constructor(clientId: string, clientSecret: string);

  setApiKey(clientId: string, clientSecret: string): void;

  setHost(host?: string, port?: string, protocol?: string): void;

  setUserToken(userToken: string): void;

  application: Application;
  bitlinks: Bitlinks;
  bsds: Bsds;
  campaigns: Campaigns;
  customBitlinks: CustomBitlinks;
  groups: Groups;
  organizations: Organizations;
  user: User;
  webhooks: Webhooks;
}

declare namespace bitlyNodeClient {

}
export = bitlyNodeClient;