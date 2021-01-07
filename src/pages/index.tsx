import { GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import React from 'react';

import About from '@components/About';
import { BlogPostTeaser } from '@components/BlogPost';
import Layout from '@components/Layout';
import SocialFollow from '@components/SocialFollow';
import asyncForEach from '@lib/asyncForEach';
import { getPosts } from '@lib/cms';
import { components, mdxOptions } from '@lib/markdown';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import { Post } from '@models/post';

const useStyles = makeStyles(() => ({
  sticky: {
    position: 'sticky',
    top: '1em',
  },
}));

type Props = {
  posts: Post[];
};

const Home: React.FC<Props> = ({ posts }) => {
  const classes = useStyles();
  const postCount = posts.length;
  return (
    <Layout pageTitle="" pageDescription="Home" url="/">
      <Grid item xs={12} sm={9}>
        {posts.map((post, i) => (
          <Grid item xs={12} sm={12}>
            <BlogPostTeaser post={post} />
            {i + 1 !== postCount && <Divider light />}
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
  await asyncForEach(posts, async (p) => {
    // eslint-disable-next-line no-param-reassign
    p.description = await renderToString(p.description, { components, mdxOptions });
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
