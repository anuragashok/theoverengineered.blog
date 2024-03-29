import dateformat from 'dateformat';
import React from 'react';
import urlParameterAppend from 'url-parameter-append';

import { Link } from '@components/Link';
import ReactMarkdown from 'react-markdown'
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Post } from '@models/post';

type Props = {
  post: Post;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    teaserpost: {
      marginBlockStart: theme.spacing(1),
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
    cardcontent: {
      padding: theme.spacing(1),
    },
    readmore: {
      marginBlock: theme.spacing(0),
      marginBlockStart: theme.spacing(1),
    },
  })
);

const BlogPostTeaser: React.FC<Props> = ({ post }) => {
  const classes = useStyles();
  const { title, slug, description, publishDate } = post;
  const formattedDate = publishDate && dateformat(new Date(publishDate), 'longDate');
  return (
    <Card className={classes.teaserpost} elevation={0}>
      <CardContent className={classes.cardcontent}>
        <Typography variant="h5" component="h2">
          <Link href={`posts/${slug}`}>{title}</Link>
        </Typography>
        <Typography variant="overline">{formattedDate}</Typography>
        <div className={classes.wrap}>
          <Grid container spacing={2}>
            <Grid item md={12} lg={4}>
              <Link href={`posts/${slug}`}>
                <picture>
                  <source srcSet={urlParameterAppend(post.heroImageUrl, 'fm', 'webp', 'w', '290')} />
                  <source srcSet={urlParameterAppend(post.heroImageUrl, 'w', '290')} />
                  <img alt="Read More" src={post.heroImageUrl} width="290" height="153" />
                </picture>
              </Link>
            </Grid>
            <Grid item md={12} lg={8}>
              <Typography variant="body1" align="justify">
              <ReactMarkdown>{description}</ReactMarkdown>
              </Typography>
              <Typography variant="body2" align="justify" className={classes.readmore}>
                <Link href={`posts/${slug}`}>Read More</Link>
              </Typography>
              <style jsx global>{`
                p {
                  margin-block: 0;
                }
              `}</style>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostTeaser;
