import { GetStaticProps } from 'next';
import React from 'react';

import About from '@components/About';
import { BlogPostTeaser } from '@components/BlogPost';
import ContactForm from '@components/ContactForm';
import Layout from '@components/Layout';
import SocialFollow from '@components/SocialFollow';
import { getPosts } from '@lib/cms';
import { Grid, makeStyles } from '@material-ui/core';
import { Post } from '@models/post';

const useStyles = makeStyles(() => ({
  sticky: {
    position: 'sticky',
    top: '-.3em',
    zIndex: 10000,
  },
}));

type Props = {
  posts: Post[];
};

const Home: React.FC<Props> = ({ posts }) => {
  const classes = useStyles();
  return (
    <Layout pageTitle="Home" pageDescription="Home" url="/">
      <Grid item xs={12} sm={9}>
        {posts.map((post) => (
          <Grid item xs={12} sm={12}>
            <BlogPostTeaser post={post} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={3}>
        <div className={classes.sticky}>
          <SocialFollow />
          <About />
        </div>
      </Grid>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
