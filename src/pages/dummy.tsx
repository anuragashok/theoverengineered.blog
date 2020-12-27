import fs from 'fs';
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
  const rss = generateRss(posts);
  fs.writeFileSync('./public/rss.xml', rss);

  const pages = await getAllContent();
  const sitemap = await generateSitemap(pages);
  fs.writeFileSync('./public/sitemap.xml', sitemap);

  return {
    props: {},
  };
};

export default Dummy;
