/* eslint-disable react/no-danger */

import dateformat from 'dateformat';
import hydrate from 'next-mdx-remote/hydrate';

import Comments from '@components/Comments';
import Title from '@components/Title';
import { components } from '@lib/markdown';
import { makeStyles, Typography } from '@material-ui/core';
import { Post } from '@models/post';

const useStyles = makeStyles(() => ({
  body: {
    '& img': {
      width: '100%',
    },
  },
}));
type Props = {
  post: Post;
  url: string;
};

const BlogPostFull: React.FC<Props> = ({ post, url }) => {
  const { title, body, publishDate, description } = post;
  const formattedDate = publishDate && dateformat(new Date(publishDate), 'longDate');
  const classes = useStyles();
  const content = hydrate(body, { components });

  return (
    <>
      <Title title={title} />
      <Typography variant="overline">{formattedDate}</Typography>
      <Typography variant="body1" align="justify" className={classes.body}>
        {content}
      </Typography>
      <Comments url={url} title={title} description={description} />
    </>
  );
};

export default BlogPostFull;
