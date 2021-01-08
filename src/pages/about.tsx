import { GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import React from 'react';

import AboutCard from '@components/About';
import Layout from '@components/Layout';
import { Link } from '@components/Link';
import Page from '@components/Page';
import SocialFollow from '@components/SocialFollow';
import { getPage } from '@lib/cms';
import { components, mdxOptions } from '@lib/markdown';
import { SOCIAL_MEDIA_URLS } from '@lib/siteinfo';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  sticky: {
    position: 'sticky',
    top: '1em',
  },
  card: {
    marginBottom: '10px',
  },
}));

type Props = {
  title: string;
  body: string;
  slug: string;
};

const About: React.FC<Props> = ({ title, body, slug }) => {
  const classes = useStyles();
  return (
    <>
      <Layout pageTitle={title} pageDescription={title} url={slug}>
        <Grid item xs={12} md={8}>
          <Page title={title} body={body} />
          <Typography variant="body1" gutterBottom>
            This blog is also available on my pages at <Link href={SOCIAL_MEDIA_URLS.medium}>Medium</Link> and{' '}
            <Link href={SOCIAL_MEDIA_URLS.devto}>Dev.to</Link>
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <SocialFollow />
        </Grid>

        <Grid item xs={12} md={4}>
          <div className={classes.sticky}>
            <AboutCard />
          </div>
        </Grid>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage('4OFtfryXjAW9lKo3FTuyWG');
  page.body = await renderToString(page.body, { components, mdxOptions });
  return {
    props: {
      ...page,
    },
  };
};

export default About;
