import fs from 'fs';
import xmlEscape from 'xml-escape';

import { Post } from '@models/post';

import { getFullUrl, SITE_TITLE } from './siteinfo';

const generateRssItem = (post: Post): string => `
  <item>
    <guid>${getFullUrl(`posts/${post.slug}`)}</guid>
    <title>${post.title}</title>
    <link>${getFullUrl(`posts/${post.slug}`)}</link>
    <description>${xmlEscape(post.description)}</description>
    <category>${post.tags?.join(' ')}</category>
    <enclosure url="https:${post.heroImageUrl}" />
    <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
  </item>
`;

const generateRssItemForCrossPublish = (post: Post): string => `
  <item>
    <guid>${getFullUrl(`posts/${post.slug}`)}</guid>
    <title>${post.title}</title>
    <link>${getFullUrl(`posts/${post.slug}`)}</link>
    <description>${xmlEscape(post.body)}</description>
    <category>${post.tags?.join(' ')}</category>
    <enclosure url="https:${post.heroImageUrl}" />
    <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
  </item>
`;

function generate(posts: Post[], itemMapper: (post: Post) => string) {
  return `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${SITE_TITLE}</title>
      <link>${getFullUrl('')}</link>
      <description>${SITE_TITLE}</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].publishDate).toUTCString()}</lastBuildDate>
      <atom:link href="${getFullUrl('rss.xml')}" rel="self" type="application/rss+xml"/>
      ${posts.map(itemMapper).join('')}
    </channel>
  </rss>`;
}

export default (posts: Post[]): void => {
  const rss = generate(posts, generateRssItem);
  fs.writeFileSync('./public/rss.xml', rss);
  const crossPublishRSS = generate(posts, generateRssItemForCrossPublish);
  fs.writeFileSync('./public/cross-publish-rss.xml', crossPublishRSS);
};
