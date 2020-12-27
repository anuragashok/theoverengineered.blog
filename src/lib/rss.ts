import { Post } from '@models/post';

import { getFullUrl, SITE_TITLE } from './siteinfo';

const generateRssItem = (post: Post): string => `
  <item>
    <guid>${getFullUrl(`blog/${post.slug}`)}</guid>
    <title>${post.title}</title>
    <link>${getFullUrl(`blog/${post.slug}`)}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
  </item>
`;

export default (posts: Post[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${SITE_TITLE}</title>
      <link>${getFullUrl('')}</link>
      <description>${SITE_TITLE}</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].publishDate).toUTCString()}</lastBuildDate>
      <atom:link href="${getFullUrl('rss.xml')}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;
