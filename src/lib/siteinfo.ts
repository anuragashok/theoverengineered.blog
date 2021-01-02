export const SITE_TITLE = 'the_Over_Engineered_Blog';
export const DESCRIPTION = 'It is not enough for code to work.';

export const PRIMARY_NAV_LINKS = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/anuragashok/theoverengineered.blog',
  },
];

export const getFullUrl = (path: string) => {
  return `https://theoverengineered.blog/${path}`;
};