import { compose, map } from 'lodash/fp';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import React from 'react';
import highlightPlugin from 'remark-prism';
import ReactDOMServer from 'react-dom/server';
import About from '@components/About';
import { BlogPostFull } from '@components/BlogPost';
import Layout from '@components/Layout';
import SocialFollow from '@components/SocialFollow';
import { getPostBySlug, getPosts } from '@lib/cms';
import { components } from '@lib/markdown';
import { Hidden } from '@material-ui/core';
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
      <Layout
        pageTitle={post.title}
        pageDescription={post.description}
        url={`posts/${post.slug}`}
        image={post.heroImageUrl}
      >
        <Grid item xs={12} md={8} lg={9}>
          <BlogPostFull post={post} url={`posts/${post.slug}`} />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className={classes.sticky}>
            <Hidden smDown implementation="css">
              <SocialFollow />
            </Hidden>
            <About condensed />
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
  post.body = ReactDOMServer.renderToString(<ReactMarkdown source="# Hello world" />)
  

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
