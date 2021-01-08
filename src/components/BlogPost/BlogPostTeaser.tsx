import dateformat from 'dateformat';
import hydrate from 'next-mdx-remote/hydrate';
import React from 'react';

import { Link } from '@components/Link';
import Media from '@components/Media';
import { components } from '@lib/markdown';
import { CardMedia, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Post } from '@models/post';

type Props = {
  post: Post;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    teaserpost: {
      marginBlockStart: theme.spacing(2),
      marginBlockEnd: theme.spacing(0),
    },
    wrap: {
      display: 'flex',
    },
    hero: {
      display: 'flex',
      width: '400px',
      height: '210px',
    },
    content: {},
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
        <div className={classes.wrap}>
          <Grid container spacing={2}>
            <Grid item md={12} lg={4}>
              <Media src={post.heroImageUrl} alt="" />
            </Grid>
            <Grid item md={12} lg={8}>
              <Typography variant="body1" align="justify" gutterBottom>
                {content}
              </Typography>
              <Typography variant="body2" align="justify">
                <Link href={`posts/${slug}`}>Read More</Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostTeaser;
