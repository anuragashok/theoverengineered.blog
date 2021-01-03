import { GetStaticProps } from 'next';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';

import { getAllContent, getPosts } from '@lib/cms';
import generateRss from '@lib/rss';
import generateSitemap from '@lib/sitemap';

/*
This is a dummy page used to do additional processing at build time.
The processing is done in getStaticProps.
The component returns 404 as this page is insignificant at runtime.
*/
const Dummy: React.FC = () => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <DefaultErrorPage statusCode={404} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  generateRss(posts);
  await asyncForEach(posts, async (p) => {
    // eslint-disable-next-line no-param-reassign
    p.description = await renderToString(p.description, { components, mdxOptions });
  });

  const pages = await getAllContent();
  generateSitemap(pages);

  return {
    props: {},
  };
};

export default Dummy;
