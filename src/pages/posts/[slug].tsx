import { compose, map } from 'lodash/fp';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import React from 'react';
import highlightPlugin from 'remark-prism';

import About from '@components/About';
import { BlogPostFull } from '@components/BlogPost';
import Layout from '@components/Layout';
import { getPostBySlug, getPosts } from '@lib/cms';
import { components } from '@lib/markdown';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Post } from '@models/post';

const useStyles = makeStyles(() => ({
  sticky: {
    position: 'sticky',
    top: '1em',
  },
}));

const BlogPostPage: React.FC<Post> = (post: Post) => {
  const classes = useStyles();
  return (
    <>
      <Layout pageTitle={post.title} pageDescription={post.description} url={`posts/${post.slug}`}>
        <Grid item xs={12} sm={9}>
          <BlogPostFull post={post} url={`posts/${post.slug}`} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className={classes.sticky}>
            <About />
          </div>
        </Grid>
      </Layout>
    </>
  );
};

export default BlogPostPage;

const mapParams = ({ slug }) => {
  return { params: { slug } };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const post = await getPostBySlug(slug as string);
  post.body = await renderToString(post.body, { components, mdxOptions: { remarkPlugins: [highlightPlugin] } });

  return { props: post };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = compose(map(mapParams))(posts);
  return {
    paths,
    fallback: false,
  };
};
