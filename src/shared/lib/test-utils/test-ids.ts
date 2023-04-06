export const TEST_ID_ATTR = 'data-testid';

export enum IDS_MAP {
  APPBAR = 'APPBAR',
  USER_LIST = 'USER_LIST',
  CAMPAIGN_CARD = 'CAMPAIGN_CARD',
  CREATIVE_CARD = 'CREATIVE_CARD',
  ICONS = 'ICONS',
  DATE_RANGE_PICKER = 'DATE_RANGE_PICKER',
  CREATIVE_CHECKBOX = 'CREATIVE_CHECKBOX',
  TRANSACTIONS_HISTORY = 'TRANSACTIONS_HISTORY',
  USER_INFO = 'USER_INFO',
  NAVIGATION = 'NAVIGATION',
  CAMPAIGN_PAGE = 'CAMPAIGN_PAGE',
  CREATIVES_PAGE = 'CREATIVES_PAGE',
  CAMPAIGN_STEPPER_SIDE_BLOCK = 'CAMPAIGN_STEPPER_SIDE_BLOCK',
  CAMPAIGN_STEPPER_FORM_ELEMENTS = 'CAMPAIGN_STEPPER_FORM_ELEMENTS',
  REPORT_PAGE = 'REPORT_PAGE',
  FAQ = 'FAQ',
  MODALS = 'MODALS',
}

/**
 * Test IDs
 * Structure:
 * const [page | component] = {
 *   [container]: {
 *     [element]: 'some test id',
 *   },
 * };
 */

const appBar = {
  btnProfileInfo: 'profileButton',
  btnLogout: 'logoutButton',
};

const userList = {
  container: 'user-list',
  btnMenu: 'user-list-menu',
};

const campaignCard = {
  btnStateControl: 'campaign-card__activate',
  container: 'campaign-card__container',
  progressBar: 'campaign-card__progress-bar',
  edit: 'campaign-card__edit-button',
  renew: 'campaign-card__renew-button',
  autoRenew: 'campaign-card__auto-renew-button',
};

const creativeCard = {
  container: 'creative-card',
  status: 'creative-status',
  name: 'creative-name',
  advertiserName: 'creative-advertiser',
  checkBox: 'creative-checkbox',
};

const icons = {
  roundCheckMark: 'roundCheckMarkIcon',
};

const dateRangePicker = {
  dateRangePicker: 'date-range-picker',
  startDate: 'startDate',
  endDate: 'endDate',
};

const creativeCheckbox = {
  box: 'creative-checkbox',
};

const report = {
  impressionsSection: 'report__impressions-section',
  spendSection: 'report__spend-section',
  topPublishersSection: 'report__top_publishers-section',
  creativeDetailsSection: 'report__creative_details-section',
  buttons: 'report__buttons',
  clientDetailsPreloader: 'report__client-details-preloader',
  lineChartPreloader: 'report__line-chart-preloader',
  lineChartPlaceholder: 'report__line-chart-placeholder',
  pieChartPreloader: 'report__pie-chart-preloader',
  pieChartPlaceholder: 'report__pie-chart-placeholder',
  publishersPreloader: 'report__publishers-preloader',
  publishersPlaceholder: 'report__publishers-placeholder',
  creativesPreloader: 'report__creatives-preloader',
  creativesPlaceholder: 'report__creatives-placeholder',
};

const allIds = {
  [IDS_MAP.APPBAR]: appBar,
  [IDS_MAP.USER_LIST]: userList,
  [IDS_MAP.CAMPAIGN_CARD]: campaignCard,
  [IDS_MAP.CREATIVE_CARD]: creativeCard,
  [IDS_MAP.ICONS]: icons,
  [IDS_MAP.DATE_RANGE_PICKER]: dateRangePicker,
  [IDS_MAP.CREATIVE_CHECKBOX]: creativeCheckbox,
  [IDS_MAP.TRANSACTIONS_HISTORY]: {
    table: 'transactions-history__table',
  },
  [IDS_MAP.USER_INFO]: {
    settings: 'user-info__popover-menu__account-settings',
    logout: 'user-info__popover-menu__logout',
    container: 'user-info__container',
  },
  [IDS_MAP.NAVIGATION]: {
    campaigns: 'nav__header-links__campaigns',
    creatives: 'nav__header-links__creatives',
    faq: 'nav__header-links__faq',
    standardTerms: 'nav__footer-links__standard-terms',
    terms: 'nav__footer-links__terms',
    privacyPolicy: 'nav__footer-links__privacy',
  },
  [IDS_MAP.CAMPAIGN_PAGE]: {
    welcome: 'page__campaigns__welcome',
  },

  [IDS_MAP.CREATIVES_PAGE]: {
    welcome: 'page__creatives__welcome',
    header: 'page__creatives__header',
    list: 'page__creatives__list',
  },
  [IDS_MAP.CAMPAIGN_STEPPER_SIDE_BLOCK]: {
    campaignName: 'stepper-info__campaign-name',
    dateRange: 'stepper-info__date-range',
    advertiserName: 'stepper-info__date-advertiser-name',
    budget: 'stepper-info__budget',
    geoTargeting: 'stepper-info__geo',
    availableImpressions: 'stepper-info__available-impressions',
    impressionsGoal: 'stepper-info__impressions-goal',
    reach: 'stepper-info__reach',
    frequency: 'stepper-info__frequency',
    paymentAmount: 'stepper-info__payment-amount',
  },
  [IDS_MAP.CAMPAIGN_STEPPER_FORM_ELEMENTS]: {
    agencyModal: 'stepper-elements__agency-modal',
    audience: 'stepper-elements__audience',
    nextBtn: 'stepper-elements__next-button',
    saveBtn: 'stepper-elements__save-button',
    saveDraftBtn: 'stepper-elements__save-draft-button',
    cancelBtn: 'stepper-elements__cancel-button',
    backBtn: 'stepper-elements__back-button',
  },
  [IDS_MAP.REPORT_PAGE]: report,
  [IDS_MAP.FAQ]: {
    container: 'faq-page__container',
  },
  [IDS_MAP.MODALS]: {
    rcv: 'modal__rcv__payment',
    uploadDuration: 'modal__upload__duration',
    uploadDropzone: 'modal__upload__dropzone',
  },
};

export default allIds;
