/* eslint-disable react/no-danger */

import dateformat from 'dateformat';

import { Link } from '@components/Link';
import PrintMarkdown from '@components/PrintMarkdown';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Post } from '@models/post';

type Props = {
  post: Post;
};

const useStyles = makeStyles((theme) =>
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

  return (
    <Card className={classes.teaserpost} elevation={0}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <Link href={`blog/${slug}`}>{title}</Link>
        </Typography>
        <Typography variant="overline">{formattedDate}</Typography>
        <Typography variant="body1" align="justify">
          <PrintMarkdown markdown={description} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPostTeaser;
