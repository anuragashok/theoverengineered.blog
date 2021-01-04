import { GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';

import asyncForEach from '@lib/asyncForEach';
import { getAllContent, getPosts } from '@lib/cms';
import { components, mdxOptions } from '@lib/markdown';
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
  await asyncForEach(posts, async (p) => {
    const { renderedOutput } = await renderToString(p.body, { components, mdxOptions });
    // eslint-disable-next-line no-param-reassign
    p.body = renderedOutput;
  });
  generateRss(posts);

  const pages = await getAllContent();
  generateSitemap(pages);

  return {
    props: {},
  };
};

export default Dummy;
