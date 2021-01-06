import dateformat from 'dateformat';
import hydrate from 'next-mdx-remote/hydrate';
import React from 'react';

import { Link } from '@components/Link';
import { components } from '@lib/markdown';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Post } from '@models/post';

type Props = {
  post: Post;
};

const useStyles = makeStyles(() =>
  createStyles({
    teaserpost: {
      marginBlockEnd: '1em',
      borderBottom: '1px solid #eeeeee',
    },
  })
);

const BlogPostTeaser: React.FC<Props> = ({ post }) => {
  const classes = useStyles();
  const { title, slug, description, publishDate } = post;
  const formattedDate = publishDate && dateformat(new Date(publishDate), 'longDate');
  const content = hydrate(description, { components });
  return (
    <Card className={classes.teaserpost} elevation={0}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <Link href={`posts/${slug}`}>{title}</Link>
        </Typography>
        <Typography variant="overline">{formattedDate}</Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          {content}
        </Typography>
        <Typography variant="body2" align="justify">
          <Link href={`posts/${slug}`}>Read More</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPostTeaser;
