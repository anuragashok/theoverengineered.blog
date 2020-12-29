import fs from 'fs';
import { compose, map } from 'lodash/fp';

import { getFullUrl } from './siteinfo';

const SITEMAP_PATH = './public/sitemap.xml';
type SiteMapEntry = { url: string; changefreq: string; priority: number };
const mapToSitemapEntry = (page: Content): SiteMapEntry => {
  return {
    url: getFullUrl(page.type === 'blogPost' ? `blog/${page.slug}` : page.slug),
    changefreq: page.type === 'blogPost' ? 'weekly' : 'daily',
    priority: page.type === 'blogPost' ? 1.0 : 0.5,
  };
};
type Content = {
  slug: string;
  type: string;
};
export default (pages: Content[]): void => {
  const links = compose(map(mapToSitemapEntry))(pages);
  links.push({ url: getFullUrl(''), changefreq: 'daily', priority: 1.0 });

  if (fs.existsSync(SITEMAP_PATH)) {
    fs.unlinkSync(SITEMAP_PATH);
  }
  const stream = fs.createWriteStream(SITEMAP_PATH, { flags: 'a' });
  stream.write(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);
  links.forEach((item) => {
    stream.write(`
      <url>
        <loc>${item.url}</loc>
        <changefreq>${item.changefreq}</changefreq>
        <priority>${item.priority}</priority>
      </url>`);
  });
  stream.write('\n');
  stream.write('</urlset>');
  stream.end();
};
