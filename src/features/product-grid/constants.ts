import { FunctionComponent, SVGProps } from 'react';
import {
  adManager,
  adManagerActive,
  adManagerDisabled,
  adminHierarchy,
  adminHierarchyActive,
  adminHierarchyDisabled,
  analytics,
  analyticsActive,
  analyticsDisabled,
  campaignManager,
  campaignManagerActive,
  campaignManagerDisabled,
  compulse,
  compulseActive,
  compulseDisabled,
  hybrid,
  hybridActive,
  hybridDisabled,
  insertionOrders,
  insertionOrdersActive,
  insertionOrdersDisabled,
  mediaPlanner,
  mediaPlannerActive,
  mediaPlannerDisabled,
  orders,
  ordersActive,
  ordersDisabled,
} from 'shared/assets/images/products';

export type ProductGridType = {
  id: number;
  label: string;
  name: string;
  isConfluented: boolean;
  link: string;
  isHidden?: boolean;
  isAvailable: boolean;
  // TODO: Find viable solution to change color of svg inside component
  // and get rid of different images for state also for vue using
  iconSet: {
    base: FunctionComponent<SVGProps<SVGSVGElement>>;
    hovered: FunctionComponent<SVGProps<SVGSVGElement>>;
    inactive: FunctionComponent<SVGProps<SVGSVGElement>>;
  };
};

export const products: ProductGridType[] = [
  {
    id: 5,
    name: 'Dashboard',
    label: 'Analytics',
    isConfluented: true,
    isAvailable: true,
    link: import.meta.env.VITE_DASHBOARD_LINK,
    iconSet: {
      base: analytics,
      hovered: analyticsActive,
      inactive: analyticsDisabled,
    },
  },
  {
    id: 6,
    name: 'Media Planner',
    label: 'Media\nPlanner',
    isConfluented: true,
    isAvailable: true,
    link: import.meta.env.VITE_MEDIA_PLANNER_LINK,
    iconSet: {
      base: mediaPlanner,
      hovered: mediaPlannerActive,
      inactive: mediaPlannerDisabled,
    },
  },
  {
    id: 0,
    name: 'Orders',
    label: 'Orders',
    isConfluented: false,
    isAvailable: false,
    link: '',
    iconSet: {
      base: orders,
      hovered: ordersActive,
      inactive: ordersDisabled,
    },
  },
  {
    id: 3,
    name: 'Ad Manager',
    label: 'Ad Manager',
    isConfluented: false,
    isAvailable: false,
    link: '',
    isHidden: true,
    iconSet: {
      base: adManager,
      hovered: adManagerActive,
      inactive: adManagerDisabled,
    },
  },
  {
    id: 0,
    name: 'Insertion orders',
    label: 'Insertion orders',
    isConfluented: false,
    isAvailable: false,
    link: '',
    iconSet: {
      base: insertionOrders,
      hovered: insertionOrdersActive,
      inactive: insertionOrdersDisabled,
    },
  },
  {
    id: 2,
    name: 'SSWebApp',
    label: 'Campaign Manager',
    isConfluented: false,
    isAvailable: false,
    link: '',
    isHidden: true,
    iconSet: {
      base: campaignManager,
      hovered: campaignManagerActive,
      inactive: campaignManagerDisabled,
    },
  },
  {
    id: 4,
    name: 'Hybrid SServ',
    label: 'Hybrid SServ',
    isConfluented: false,
    isAvailable: false,
    link: '',
    isHidden: true,
    iconSet: {
      base: hybrid,
      hovered: hybridActive,
      inactive: hybridDisabled,
    },
  },
  {
    id: 7,
    name: 'DSStore',
    label: 'DSStore',
    isConfluented: false,
    isAvailable: false,
    link: '',
    isHidden: true,
    iconSet: {
      base: compulse,
      hovered: compulseActive,
      inactive: compulseDisabled,
    },
  },
];

export const productIdWithEnrichedToken = [6];

export const adminHierarchyProduct: ProductGridType = {
  id: 1,
  name: 'Admin Hierarchy',
  label: 'Admin\nhierarchy',
  isConfluented: true,
  isAvailable: true,
  link: import.meta.env.VITE_ADMIN_HIERARCHY_LINK,
  iconSet: {
    base: adminHierarchy,
    hovered: adminHierarchyActive,
    inactive: adminHierarchyDisabled,
  },
};

export const testID = {
  projectItemSkeleton: 'project-item-skeleton',
  productGridItemSkeleton: 'product-grid-item-skeleton',
  productGridItem: 'product-grid-item',
};

export const SKELETON_ITEMS_LENGTH = 3;
