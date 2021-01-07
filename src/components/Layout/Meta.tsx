import Head from 'next/head';
import React from 'react';

import { getFullUrl } from '@lib/siteinfo';

type Props = {
  url: string;
  description: string;
  title: string;
  image: string;
};

const Meta: React.FC<Props> = ({ url, description, title, image }) => {
  let ogimage = image;
  if (!ogimage) {
    ogimage = getFullUrl('banner.jpg');
  }
  if (ogimage.startsWith('//')) {
    ogimage = `https:${ogimage}`;
  }
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2c387e" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#2c387e" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={getFullUrl(url)} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogimage} />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={getFullUrl(url)} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={ogimage} />
      <meta property="twitter:description" content={description} />

      <link rel="canonical" href={getFullUrl(url)} />
      <link rel="alternate" type="application/atom+xml" title="theoverengineered.blog" href="/rss.xml" />
    </Head>
  );
};

export default Meta;
