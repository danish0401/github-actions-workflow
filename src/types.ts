export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Cuid: any;
  Currency: any;
  DID: any;
  Date: any;
  DateTime: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IP: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  SemVer: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};

export type AmAdvertiser = {
  __typename?: 'AMAdvertiser';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['NonEmptyString'];
  platformId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['NonEmptyString']>;
};

export type AdmanagerMessage = {
  __typename?: 'AdmanagerMessage';
  level: MessageLevel;
  text: Scalars['String'];
};

export type AdmanagerMutationResponse = {
  message: AdmanagerMessage;
};

export type AppConfig = {
  __typename?: 'AppConfig';
  features: AppConfigFeatures;
  setup: AppConfigSetup;
};

export type AppConfigFeatures = {
  __typename?: 'AppConfigFeatures';
  amAdvertisers?: Maybe<Scalars['Boolean']>;
  chatbot?: Maybe<Scalars['Boolean']>;
  publisherPackages?: Maybe<Scalars['Boolean']>;
  radioButtonForPublisherPackages?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<Scalars['Boolean']>;
  updateAppConfig?: Maybe<Scalars['Boolean']>;
};

export type AppConfigSetup = {
  __typename?: 'AppConfigSetup';
  maxCampaignPrice: Scalars['PositiveInt'];
  maxCreativeSize: Scalars['BigInt'];
  maxTopUp: Scalars['PositiveInt'];
  minCampaignPrice: Scalars['PositiveInt'];
  minTopUp: Scalars['PositiveInt'];
  possibleCreativeDurations: Array<Scalars['PositiveInt']>;
  possibleCreativeMimeTypes: Array<Scalars['String']>;
  videoRequestPrice: Scalars['PositiveInt'];
};

export type AudienceForecastingInput = {
  audienceTargets: Array<Scalars['UUID']>;
  endDate: Scalars['Date'];
  geoTargets: Array<Scalars['Int']>;
  startDate: Scalars['Date'];
};

export type AudienceForecastingType = {
  __typename?: 'AudienceForecastingType';
  audienceAvails: Scalars['BigInt'];
};

export type AudienceTarget = {
  __typename?: 'AudienceTarget';
  category: AudienceTargetCategory;
  id: Scalars['UUID'];
  name: Scalars['NonEmptyString'];
  subcategory: AudienceTargetSubCategory;
};

export type AudienceTargetCategory = {
  __typename?: 'AudienceTargetCategory';
  name: Scalars['NonEmptyString'];
};

export type AudienceTargetSubCategory = {
  __typename?: 'AudienceTargetSubCategory';
  name: Scalars['NonEmptyString'];
};

export enum AuthType {
  Basic = 'Basic',
  Google = 'Google',
}

export type CampaignCreativesReportWidget = {
  __typename?: 'CampaignCreativesReportWidget';
  items: Array<CreativeReportStats>;
};

export type CampaignDevicesReportWidget = {
  __typename?: 'CampaignDevicesReportWidget';
  items: Array<DeviceReportStats>;
};

export type CampaignForecastingType = {
  __typename?: 'CampaignForecastingType';
  frequency: Scalars['NonNegativeInt'];
  impressionsGoal: Scalars['NonNegativeInt'];
  reach: Scalars['NonNegativeInt'];
};

export enum CampaignPlatform {
  Emulated = 'EMULATED',
  Sswa = 'SSWA',
}

export type CampaignPlatformsReportWidget = {
  __typename?: 'CampaignPlatformsReportWidget';
  items: Array<PlatformReportStats>;
};

export type CampaignPublishersReportWidget = {
  __typename?: 'CampaignPublishersReportWidget';
  items: Array<PublisherReportStats>;
};

export type CampaignRenewTask = {
  __typename?: 'CampaignRenewTask';
  comingExecutionDate: Scalars['Date'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  period: RenewPeriod;
  times?: Maybe<Scalars['NonNegativeInt']>;
};

export type CampaignSummaryAggregation = {
  __typename?: 'CampaignSummaryAggregation';
  advertiserName?: Maybe<Scalars['NonEmptyString']>;
  campaignBudget: Scalars['NonNegativeInt'];
  campaignName: Scalars['NonEmptyString'];
  costs: Scalars['NonNegativeFloat'];
  endDate: Scalars['Date'];
  geos: Array<GeoData>;
  impressions: Scalars['NonNegativeInt'];
  impressionsGoal: Scalars['NonNegativeInt'];
  startDate: Scalars['Date'];
  timezone: Scalars['TimeZone'];
  vcr: Scalars['NonNegativeFloat'];
};

export type CampaignsBudget = {
  __typename?: 'CampaignsBudget';
  daily: Array<CampaignsOverallDailyFloat>;
  total: Scalars['NonNegativeFloat'];
};

export type CampaignsOverall = {
  __typename?: 'CampaignsOverall';
  activeCampaignsCount: CampaignsOverallActiveCampaigns;
  budget: CampaignsBudget;
  clicks: CampaignsOverallClicks;
  completeView: CampaignsOverallCompleteView;
  costs: CampaignsOverallCosts;
  impressions: CampaignsOverallImpressions;
};

export type CampaignsOverallActiveCampaigns = {
  __typename?: 'CampaignsOverallActiveCampaigns';
  daily: Array<CampaignsOverallDailyInt>;
  total: Scalars['NonNegativeInt'];
};

export type CampaignsOverallClicks = {
  __typename?: 'CampaignsOverallClicks';
  daily: Array<CampaignsOverallDailyInt>;
  total: Scalars['NonNegativeInt'];
};

export type CampaignsOverallCompleteView = {
  __typename?: 'CampaignsOverallCompleteView';
  daily: Array<CampaignsOverallDailyInt>;
  total: Scalars['NonNegativeInt'];
};

export type CampaignsOverallCosts = {
  __typename?: 'CampaignsOverallCosts';
  daily: Array<CampaignsOverallDailyFloat>;
  total: Scalars['NonNegativeFloat'];
};

export type CampaignsOverallDailyFloat = {
  __typename?: 'CampaignsOverallDailyFloat';
  date: Scalars['Date'];
  value: Scalars['NonNegativeFloat'];
};

export type CampaignsOverallDailyInt = {
  __typename?: 'CampaignsOverallDailyInt';
  date: Scalars['Date'];
  value: Scalars['NonNegativeInt'];
};

export type CampaignsOverallImpressions = {
  __typename?: 'CampaignsOverallImpressions';
  daily: Array<CampaignsOverallDailyInt>;
  total: Scalars['NonNegativeInt'];
};

export type CardDetailsType = {
  __typename?: 'CardDetailsType';
  expirationMonth: Scalars['NonEmptyString'];
  expirationYear: Scalars['NonEmptyString'];
  number: Scalars['NonEmptyString'];
  type: Scalars['NonEmptyString'];
};

export type CardType = {
  __typename?: 'CardType';
  cardDetails: CardDetailsType;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAmAdvertiserInput = {
  name: Scalars['NonEmptyString'];
  url?: InputMaybe<Scalars['NonEmptyString']>;
};

export type CreateCampaignRenewTask = {
  campaignId: Scalars['UUID'];
  period: RenewPeriod;
  times?: InputMaybe<Scalars['PositiveInt']>;
};

export type CreateRegistrationRequestInput = {
  authType: AuthType;
  email: Scalars['EmailAddress'];
  referrerId?: InputMaybe<Scalars['UUID']>;
  token: Scalars['String'];
};

export type CreativeReportStats = {
  __typename?: 'CreativeReportStats';
  creativeUrl?: Maybe<Scalars['URL']>;
  id: Scalars['UUID'];
  impressions?: Maybe<Scalars['NonNegativeInt']>;
  preview?: Maybe<Scalars['NonEmptyString']>;
  title: Scalars['NonEmptyString'];
  vcr?: Maybe<Scalars['NonNegativeFloat']>;
};

export type CreativeSsCreateInput = {
  amAdvertiserId: Scalars['UUID'];
  title: Scalars['NonEmptyString'];
  url: Scalars['URL'];
};

export enum CybersourceKeyFormat {
  Jwk = 'JWK',
  Jwt = 'JWT',
}

export type DeviceReportStats = {
  __typename?: 'DeviceReportStats';
  impressions: Scalars['NonNegativeInt'];
  logo: Scalars['NonEmptyString'];
  name: Scalars['NonEmptyString'];
};

export type DeviceStats = {
  __typename?: 'DeviceStats';
  distribution: Scalars['NonNegativeFloat'];
  id: Scalars['NonNegativeInt'];
  logo?: Maybe<Scalars['NonEmptyString']>;
  name?: Maybe<Scalars['NonEmptyString']>;
};

export type GeoData = {
  __typename?: 'GeoData';
  canonicalName: Scalars['NonEmptyString'];
  cid: Scalars['NonNegativeInt'];
  name: Scalars['NonEmptyString'];
  type: GeoType;
};

export type GeoDataResponse = {
  __typename?: 'GeoDataResponse';
  items: Array<GeoData>;
  limit: Scalars['PositiveInt'];
  total: Scalars['NonNegativeInt'];
};

export enum GeoType {
  City = 'city',
  County = 'county',
  State = 'state',
  Zip = 'zip',
}

export type Login = {
  __typename?: 'Login';
  appConfig: AppConfig;
  token: Scalars['JWT'];
  user: User;
};

export enum MessageLevel {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}

export type Mutation = {
  __typename?: 'Mutation';
  confirmRegistrationRequest: Login;
  createAMAdvertiser: AmAdvertiser;
  createCampaignRenewTask: CampaignRenewTask;
  createRegistrationRequest: Scalars['Boolean'];
  createSSCampaign: SswaCampaign;
  createSSCreative: SsCreative;
  createUploadUrl?: Maybe<PresignUploadUrl>;
  createVideoRequest: SsCreative;
  createZendeskTicket: ZendeskTicketMutationResponse;
  payVideoRequest: VideoRequest;
  removeCard?: Maybe<Scalars['Void']>;
  startCampaign: SswaCampaign;
  stopCampaign: SswaCampaign;
  topUpBalance: TopUpBalanceMutationResponse;
  topUpBalanceByInstrument: TopUpBalanceMutationResponse;
  updateAppConfigSetup: AppConfigSetup;
  updateCampaignRenewTask: CampaignRenewTask;
  updateSSCampaign: SswaCampaign;
  updateTenant: Tenant;
  updateUser: User;
};

export type MutationConfirmRegistrationRequestArgs = {
  id: Scalars['UUID'];
};

export type MutationCreateAmAdvertiserArgs = {
  input: CreateAmAdvertiserInput;
};

export type MutationCreateCampaignRenewTaskArgs = {
  input: CreateCampaignRenewTask;
};

export type MutationCreateRegistrationRequestArgs = {
  input: CreateRegistrationRequestInput;
};

export type MutationCreateSsCampaignArgs = {
  input: SswaCampaignCreateInput;
};

export type MutationCreateSsCreativeArgs = {
  input: CreativeSsCreateInput;
};

export type MutationCreateUploadUrlArgs = {
  fileName: Scalars['String'];
};

export type MutationCreateVideoRequestArgs = {
  input: VideoRequestInput;
};

export type MutationCreateZendeskTicketArgs = {
  input: ZendeskTicketCreateInput;
};

export type MutationPayVideoRequestArgs = {
  id: Scalars['UUID'];
};

export type MutationRemoveCardArgs = {
  id: Scalars['UUID'];
};

export type MutationStartCampaignArgs = {
  id: Scalars['UUID'];
};

export type MutationStopCampaignArgs = {
  id: Scalars['UUID'];
};

export type MutationTopUpBalanceArgs = {
  input: TopUpBalanceInput;
};

export type MutationTopUpBalanceByInstrumentArgs = {
  input: TopUpBalanceByInstrumentInput;
};

export type MutationUpdateAppConfigSetupArgs = {
  input: UpdateAppConfigSetupInput;
};

export type MutationUpdateCampaignRenewTaskArgs = {
  id: Scalars['UUID'];
  input: UpdateCampaignRenewTask;
};

export type MutationUpdateSsCampaignArgs = {
  input: SswaCampaignUpdateInput;
};

export type MutationUpdateTenantArgs = {
  input: UpdateTenantInput;
};

export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
};

export type OnboardingTours = {
  __typename?: 'OnboardingTours';
  welcomeBonusHighlight?: Maybe<Scalars['Boolean']>;
};

export type OnboardingToursInput = {
  welcomeBonusHighlight?: InputMaybe<Scalars['Boolean']>;
};

export type PlatformReportStats = {
  __typename?: 'PlatformReportStats';
  impressions: Scalars['NonNegativeInt'];
  logo: Scalars['URL'];
  name: Scalars['NonEmptyString'];
};

export type PlatformStats = {
  __typename?: 'PlatformStats';
  distribution: Scalars['NonNegativeFloat'];
  id: Scalars['NonNegativeInt'];
  logo?: Maybe<Scalars['NonEmptyString']>;
  name?: Maybe<Scalars['NonEmptyString']>;
};

export type PresignUploadUrl = {
  __typename?: 'PresignUploadUrl';
  clientUrl: Scalars['URL'];
  fields: Scalars['String'];
  location: Scalars['String'];
  url: Scalars['URL'];
};

export type PublisherPackage = {
  __typename?: 'PublisherPackage';
  cpm: Scalars['PositiveInt'];
  id: Scalars['UUID'];
  name: Scalars['NonEmptyString'];
};

export type PublisherReportStats = {
  __typename?: 'PublisherReportStats';
  impressions?: Maybe<Scalars['NonNegativeInt']>;
  logo: Scalars['URL'];
  name: Scalars['NonEmptyString'];
  vcr?: Maybe<Scalars['NonNegativeFloat']>;
};

export type PublisherStats = {
  __typename?: 'PublisherStats';
  distribution: Scalars['NonNegativeFloat'];
  id: Scalars['NonNegativeInt'];
  logo?: Maybe<Scalars['NonEmptyString']>;
  name?: Maybe<Scalars['NonEmptyString']>;
};

export type Query = {
  __typename?: 'Query';
  amAdvertisers: Array<AmAdvertiser>;
  appConfig: AppConfig;
  audienceForecasting: AudienceForecastingType;
  audienceTargets: Array<AudienceTarget>;
  campaignCreativesReportWidget: CampaignCreativesReportWidget;
  campaignDevicesReportWidget: CampaignDevicesReportWidget;
  campaignForecasting: CampaignForecastingType;
  campaignPlatformsReportWidget: CampaignPlatformsReportWidget;
  campaignPublishersReportWidget: CampaignPublishersReportWidget;
  campaignSummaryReportStats: CampaignSummaryAggregation;
  campaignsOverall: CampaignsOverall;
  cards: Array<CardType>;
  creatives: SsCreativeList;
  findReferrer?: Maybe<Referrer>;
  getCybersourceKey: Scalars['JSON'];
  getGeoByZip?: Maybe<ZipGeoData>;
  login: Login;
  me: User;
  publisherPackages: Array<PublisherPackage>;
  searchGeoTargets: GeoDataResponse;
  sswaCampaign: SswaCampaign;
  sswaCampaigns: SswaCampaignsList;
  statsByDateReportStats: StatsByDayAggregation;
  tenant: Tenant;
  transactions: Array<Transaction>;
};

export type QueryAudienceForecastingArgs = {
  input: AudienceForecastingInput;
};

export type QueryCampaignCreativesReportWidgetArgs = {
  reportHash: Scalars['UUID'];
};

export type QueryCampaignDevicesReportWidgetArgs = {
  reportHash: Scalars['UUID'];
};

export type QueryCampaignForecastingArgs = {
  campaignId: Scalars['UUID'];
};

export type QueryCampaignPlatformsReportWidgetArgs = {
  reportHash: Scalars['UUID'];
};

export type QueryCampaignPublishersReportWidgetArgs = {
  reportHash: Scalars['UUID'];
};

export type QueryCampaignSummaryReportStatsArgs = {
  reportHash: Scalars['UUID'];
};

export type QueryCreativesArgs = {
  amAdvertiserId?: InputMaybe<Scalars['UUID']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SortOrder>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortField>;
  statuses?: InputMaybe<Array<SsCreativeStatus>>;
};

export type QueryFindReferrerArgs = {
  key: Scalars['NonEmptyString'];
};

export type QueryGetCybersourceKeyArgs = {
  format: CybersourceKeyFormat;
  origin?: InputMaybe<Scalars['String']>;
};

export type QueryGetGeoByZipArgs = {
  zip: Scalars['NonEmptyString'];
};

export type QueryLoginArgs = {
  token: Scalars['JWT'];
};

export type QuerySearchGeoTargetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search: Scalars['String'];
};

export type QuerySswaCampaignArgs = {
  id: Scalars['UUID'];
};

export type QuerySswaCampaignsArgs = {
  amAdvertiserId?: InputMaybe<Scalars['UUID']>;
  isRecurring?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SortOrder>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortField>;
  status?: InputMaybe<SswaCampaignStatus>;
};

export type QueryStatsByDateReportStatsArgs = {
  reportHash: Scalars['UUID'];
};

export type QueryTenantArgs = {
  id: Scalars['UUID'];
};

export type Referrer = {
  __typename?: 'Referrer';
  id: Scalars['UUID'];
  key: Scalars['NonEmptyString'];
  utmTags: Scalars['JSON'];
};

export type RegistrationRequest = {
  __typename?: 'RegistrationRequest';
  authType: AuthType;
  email: Scalars['EmailAddress'];
  expirationTime: Scalars['DateTime'];
  id: Scalars['UUID'];
};

export enum RenewPeriod {
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
}

export type Role = {
  __typename?: 'Role';
  id: Scalars['UUID'];
  label: Scalars['NonEmptyString'];
  name: Scalars['NonEmptyString'];
  public?: Maybe<Scalars['Boolean']>;
};

export type SsCreative = {
  __typename?: 'SSCreative';
  amAdvertiser: AmAdvertiser;
  creativeUrl?: Maybe<Scalars['URL']>;
  id: Scalars['UUID'];
  platformId?: Maybe<Scalars['NonNegativeInt']>;
  preview?: Maybe<Scalars['String']>;
  status: SsCreativeStatus;
  title: Scalars['NonEmptyString'];
  videoRequest?: Maybe<VideoRequest>;
};

export type SsCreativeList = {
  __typename?: 'SSCreativeList';
  items: Array<SsCreative>;
  limit: Scalars['NonNegativeInt'];
  offset: Scalars['NonNegativeInt'];
  total: Scalars['NonNegativeInt'];
};

export enum SsCreativeStatus {
  Approved = 'Approved',
  Declined = 'Declined',
  Draft = 'Draft',
  Production = 'Production',
}

export type SswaCampaign = {
  __typename?: 'SSWACampaign';
  amAdvertiser: AmAdvertiser;
  audienceTargets: Array<AudienceTarget>;
  budget: Scalars['NonNegativeFloat'];
  cpm: Scalars['PositiveInt'];
  creatives: Array<SsCreative>;
  dailyStats: Array<SswaCampaignDailyStats>;
  endDate?: Maybe<Scalars['Date']>;
  geos: Array<GeoData>;
  id: Scalars['UUID'];
  impressionsGoal: Scalars['NonNegativeInt'];
  name: Scalars['NonEmptyString'];
  orderId?: Maybe<Scalars['NonNegativeInt']>;
  platform: CampaignPlatform;
  platformId: Scalars['NonNegativeInt'];
  previews?: Maybe<Array<Maybe<Scalars['NonEmptyString']>>>;
  /** @deprecated No longer supported */
  product?: Maybe<Scalars['String']>;
  publicReport: Scalars['Boolean'];
  publisherPackages?: Maybe<Array<PublisherPackage>>;
  renewTask?: Maybe<CampaignRenewTask>;
  startDate: Scalars['Date'];
  status: SswaCampaignStatus;
  tenantId: Scalars['UUID'];
  timezone?: Maybe<Scalars['TimeZone']>;
};

export type SswaCampaignCreateInput = {
  amAdvertiserId: Scalars['UUID'];
  audienceTargets?: InputMaybe<Array<Scalars['UUID']>>;
  budget: Scalars['NonNegativeFloat'];
  creatives?: InputMaybe<Array<Scalars['UUID']>>;
  endDate: Scalars['Date'];
  geos?: InputMaybe<Array<Scalars['NonNegativeInt']>>;
  name: Scalars['NonEmptyString'];
  publisherPackages?: InputMaybe<Array<Scalars['UUID']>>;
  startDate: Scalars['Date'];
};

export type SswaCampaignDailyStats = {
  __typename?: 'SSWACampaignDailyStats';
  clicks?: Maybe<Scalars['NonNegativeInt']>;
  completeView?: Maybe<Scalars['NonNegativeInt']>;
  costs?: Maybe<Scalars['NonNegativeFloat']>;
  date?: Maybe<Scalars['Date']>;
  impressions?: Maybe<Scalars['NonNegativeInt']>;
};

export enum SswaCampaignStatus {
  Built = 'Built',
  Draft = 'Draft',
  Ended = 'Ended',
  Live = 'Live',
  Paused = 'Paused',
  Pending = 'Pending',
}

export type SswaCampaignUpdateInput = {
  audienceTargets?: InputMaybe<Array<Scalars['UUID']>>;
  budget?: InputMaybe<Scalars['NonNegativeFloat']>;
  creatives?: InputMaybe<Array<Scalars['UUID']>>;
  endDate?: InputMaybe<Scalars['Date']>;
  geos?: InputMaybe<Array<Scalars['NonNegativeInt']>>;
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['NonEmptyString']>;
  publicReport?: InputMaybe<Scalars['Boolean']>;
  publisherPackages?: InputMaybe<Array<Scalars['UUID']>>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type SswaCampaignsList = {
  __typename?: 'SSWACampaignsList';
  items: Array<SswaCampaign>;
  limit: Scalars['NonNegativeInt'];
  total: Scalars['NonNegativeInt'];
};

export enum SortField {
  Advertiser = 'advertiser',
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SparkSmbData = {
  __typename?: 'SparkSMBData';
  additionalFiles?: Maybe<Array<Scalars['String']>>;
  contactNumber?: Maybe<Scalars['String']>;
  duration: Scalars['NonEmptyString'];
  urlAddress?: Maybe<Scalars['String']>;
  videoScript: Scalars['NonEmptyString'];
  voiceDirection: Scalars['NonEmptyString'];
  voiceGender: Scalars['NonEmptyString'];
};

export type StatsByDateItem = {
  __typename?: 'StatsByDateItem';
  costs: Scalars['NonNegativeFloat'];
  date: Scalars['Date'];
  impressions: Scalars['NonNegativeInt'];
};

export type StatsByDayAggregation = {
  __typename?: 'StatsByDayAggregation';
  stats: Array<StatsByDateItem>;
  totalCosts: Scalars['NonNegativeFloat'];
  totalImpressions: Scalars['NonNegativeInt'];
};

export type Tenant = {
  __typename?: 'Tenant';
  address?: Maybe<TenantAddress>;
  budget?: Maybe<Scalars['NonNegativeInt']>;
  clientTheme?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  name: Scalars['NonEmptyString'];
  primaryContact?: Maybe<Scalars['String']>;
  primaryContactEmail?: Maybe<Scalars['EmailAddress']>;
  status?: Maybe<TenantStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type TenantAddress = {
  __typename?: 'TenantAddress';
  city?: Maybe<Scalars['NonEmptyString']>;
  state?: Maybe<Scalars['NonEmptyString']>;
  zipCode?: Maybe<Scalars['NonEmptyString']>;
};

export enum TenantStatus {
  Approved = 'APPROVED',
  Invite = 'INVITE',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export type TopUpBalanceByInstrumentInput = {
  amount: Scalars['NonNegativeInt'];
  instrumentId: Scalars['UUID'];
};

export type TopUpBalanceInput = {
  amount: Scalars['NonNegativeInt'];
  cardHolderName: Scalars['NonEmptyString'];
  cybersourceKey: Scalars['JWT'];
  savePaymentMethod?: InputMaybe<Scalars['Boolean']>;
};

export type TopUpBalanceMutationResponse = AdmanagerMutationResponse & {
  __typename?: 'TopUpBalanceMutationResponse';
  budget: Scalars['NonNegativeInt'];
  message: AdmanagerMessage;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['NonNegativeFloat'];
  campaign?: Maybe<SswaCampaign>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  remainedBalance: Scalars['NonNegativeFloat'];
  status: TransactionStatuses;
  type: TransactionTypes;
  videoRequest?: Maybe<VideoRequest>;
};

export enum TransactionStatuses {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
}

export enum TransactionTypes {
  BalanceReplenishment = 'BALANCE_REPLENISHMENT',
  CampaignCharge = 'CAMPAIGN_CHARGE',
  CampaignRefund = 'CAMPAIGN_REFUND',
  VideoRequestCharge = 'VIDEO_REQUEST_CHARGE',
  WelcomeBonus = 'WELCOME_BONUS',
}

export type UpdateAppConfigSetupInput = {
  maxCampaignPrice?: InputMaybe<Scalars['PositiveInt']>;
  maxCreativeSize?: InputMaybe<Scalars['BigInt']>;
  maxTopUp?: InputMaybe<Scalars['PositiveInt']>;
  minCampaignPrice?: InputMaybe<Scalars['PositiveInt']>;
  minTopUp?: InputMaybe<Scalars['PositiveInt']>;
  possibleCreativeDurations?: InputMaybe<Array<InputMaybe<Scalars['PositiveInt']>>>;
  possibleCreativeMimeTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoRequestPrice?: InputMaybe<Scalars['PositiveInt']>;
};

export type UpdateCampaignRenewTask = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  period?: InputMaybe<RenewPeriod>;
  times?: InputMaybe<Scalars['NonNegativeInt']>;
};

export type UpdateTenantInput = {
  name?: InputMaybe<Scalars['NonEmptyString']>;
  primaryContact?: InputMaybe<Scalars['String']>;
  primaryContactEmail?: InputMaybe<Scalars['EmailAddress']>;
  url?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  onboardingTours?: Maybe<OnboardingTours>;
  picture?: Maybe<Scalars['URL']>;
  role: Role;
  tenant?: Maybe<Tenant>;
  timezone?: Maybe<Scalars['TimeZone']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUpdateInput = {
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  onboardingTours?: InputMaybe<OnboardingToursInput>;
  roleId?: InputMaybe<Scalars['UUID']>;
  tenantId?: InputMaybe<Scalars['UUID']>;
  timezone?: InputMaybe<Scalars['TimeZone']>;
};

export type VideoRequest = {
  __typename?: 'VideoRequest';
  id: Scalars['UUID'];
  sparkSMBData: SparkSmbData;
  status: VideoRequestStatus;
};

export type VideoRequestInput = {
  additionalFiles?: InputMaybe<Array<Scalars['String']>>;
  amAdvertiserId: Scalars['UUID'];
  contactNumber?: InputMaybe<Scalars['String']>;
  duration: Scalars['NonEmptyString'];
  urlAddress?: InputMaybe<Scalars['String']>;
  videoScript: Scalars['NonEmptyString'];
  voiceDirection: Scalars['NonEmptyString'];
  voiceGender: Scalars['NonEmptyString'];
};

export enum VideoRequestStatus {
  Approved = 'APPROVED',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID',
}

export enum ZendeskEntityType {
  Campaign = 'Campaign',
  Creative = 'Creative',
  Other = 'Other',
}

export type ZendeskTicketCreateInput = {
  ccEmail?: InputMaybe<Scalars['EmailAddress']>;
  entityId?: InputMaybe<Scalars['UUID']>;
  entityType: ZendeskEntityType;
  message: Scalars['NonEmptyString'];
  subject: Scalars['NonEmptyString'];
};

export type ZendeskTicketMutationResponse = AdmanagerMutationResponse & {
  __typename?: 'ZendeskTicketMutationResponse';
  message: AdmanagerMessage;
};

export type ZipGeoData = {
  __typename?: 'ZipGeoData';
  city: Scalars['NonEmptyString'];
  state: Scalars['NonEmptyString'];
  zip: Scalars['NonEmptyString'];
};
