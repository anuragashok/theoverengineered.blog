import { GetStaticProps } from 'next';
import React from 'react';

import GithubProfile from '@components/GithubProfile';
import Layout from '@components/Layout';
import LinkedinProfile from '@components/LinkedInProfile';
import Page from '@components/Page';
import { getPage } from '@lib/cms';
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  sticky: {
    position: 'sticky',
    top: '-.3em',
    zIndex: 10000,
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
        <Grid item xs={12} sm={8}>
          <Page title={title} body={body} />
        </Grid>

        <Grid item xs={12} sm={4}>
          <div className={classes.sticky}>
            <Card raised className={classes.card}>
              <CardContent>
                <GithubProfile username="anuragashok" />
              </CardContent>
            </Card>
            <Card raised className={classes.card}>
              <CardContent>
                <LinkedinProfile />
              </CardContent>
            </Card>
          </div>
        </Grid>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage('4OFtfryXjAW9lKo3FTuyWG');
  return {
    props: {
      ...page,
    },
  };
};

export default About;
