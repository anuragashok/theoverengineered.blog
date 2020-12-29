import fs from 'fs';
import { compose, map } from 'lodash/fp';

import { getFullUrl } from './siteinfo';

const SITEMAP_PATH = './public/sitemap.xml';
type SiteMapEntry = { url: string; changefreq: string; priority: number };
const mapToSitemapEntry = (page: Content): SiteMapEntry => {
  return {
    url: page.type === 'blogPost' ? getFullUrl(`blog/${page.slug}`) : page.slug,
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

  if (fs.existsSync(SITEMAP_PATH)) {
    fs.unlinkSync(SITEMAP_PATH);
  }
  const stream = fs.createWriteStream(SITEMAP_PATH, { flags: 'a' });
  links.forEach((item) => {
    stream.write(`
      <url>
        <loc>${item.url}</loc>
        <changefreq>${item.changefreq}</changefreq>
        <priority>${item.priority}</priority>
      </url>`);
  });
  stream.end();
};
