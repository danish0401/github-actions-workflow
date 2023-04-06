type LinkShape = {
  to: string;
  title: string;
  id: string;
};

export const footerLinks: LinkShape[] = [
  { to: '/standard-terms', title: 'Standard Advertiser Terms and Conditions', id: 'standardTerms' },
  { to: '/terms', title: 'Terms and Conditions', id: 'terms' },
  { to: '/privacy-policy', title: 'Privacy Policy', id: 'privacyPolicy' },
];

export const headerLinks: LinkShape[] = [
  {
    to: '/campaigns',
    title: 'Campaigns',
    id: 'campaigns',
  },
  {
    to: '/creatives',
    title: 'Creatives',
    id: 'creatives',
  },
  {
    to: '/faq',
    title: 'FAQ',
    id: 'faq',
  },
];

export const mainHeaderHeight = 80;
export const footerHeight = 48;
export const loginHeaderHeight = 68;
