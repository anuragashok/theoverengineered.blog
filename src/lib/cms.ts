import { createClient, Entry } from 'contentful';
import { compose, map } from 'lodash/fp';

import { IBlogPostFields, IPageFields } from '@models/contentful';
import { Post } from '@models/post';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const mapToPost = (post: Entry<IBlogPostFields>): Post => {
  let { body } = post.fields;
  const { heroImage } = post.fields;
  if (heroImage?.fields?.file.url) {
    body = `![a](${heroImage.fields.file.url})  

${body}`;
  }
  return {
    title: post.fields.title,
    slug: post.fields.slug,
    heroImageUrl: post.fields.heroImage?.fields?.file.url || '',
    description: post.fields.description,
    body,
    author: { name: post.fields.author?.fields.name as string },
    publishDate: post.fields.publishDate,
    tags: post.fields.tags || null,
    type: post.sys.contentType.sys.id,
  };
};

export const getPage = async (entryid: string): Promise<IPageFields> => {
  const entry: Entry<IPageFields> = await client.getEntry(entryid);
  return entry.fields;
};

export async function getPostBySlug(slug: string): Promise<Post> {
  const entries = await client.getEntries({
    limit: 1,
    content_type: 'blogPost',
    'fields.slug': slug,
  });

  return compose(map(mapToPost))(entries.items)[0];
}

export async function getPosts(): Promise<Post[]> {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  });

  return compose(map(mapToPost))(entries.items);
}

type Content = {
  slug: string;
  type: string;
};
export async function getAllContent(): Promise<Content[]> {
  const entries = await client.getEntries({
    'sys.contentType.sys.id[in]': 'page,blogPost',
  });
  return compose(map(mapToPost))(entries.items) as Content[];
}
