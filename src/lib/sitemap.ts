import { compose, map } from 'lodash/fp';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

import { getFullUrl } from './siteinfo';

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
export default (pages: Content[]): Promise<string> => {
  const stream = new SitemapStream({ hostname: getFullUrl('') });
  const links = compose(map(mapToSitemapEntry))(pages);
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());
};
