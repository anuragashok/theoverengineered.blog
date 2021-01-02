import { GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import React from 'react';

import About from '@components/About';
import { BlogPostTeaser } from '@components/BlogPost';
import Layout from '@components/Layout';
import SocialFollow from '@components/SocialFollow';
import { getPosts } from '@lib/cms';
import { components, mdxOptions } from '@lib/markdown';
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

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
}

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
