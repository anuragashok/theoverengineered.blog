export const SITE_TITLE = 'the_Over_Engineered_Blog';
export const DESCRIPTION = 'It is not enough for code to work.';
export const SOCIAL_MEDIA_URLS = {
  linkedin: 'https://www.linkedin.com/in/anurag-ashok/',
  githubrepo: 'https://github.com/anuragashok/theoverengineered.blog',
  githubprofile: 'https://github.com/anuragashok',
};
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
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anurag-ashok/',
  },
];

export const getFullUrl = (path: string): string => {
  return `https://theoverengineered.blog/${path}`;
};
