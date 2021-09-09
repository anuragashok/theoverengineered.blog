import { GetStaticProps } from 'next';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDOMServer from 'react-dom/server';

import asyncForEach from '@lib/asyncForEach';
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
  await asyncForEach(posts, async (p) => {
    const renderedOutput = ReactDOMServer.renderToString(<ReactMarkdown>{p.body}</ReactMarkdown>);
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
