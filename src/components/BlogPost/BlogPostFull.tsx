/* eslint-disable react/no-danger */

import dateformat from 'dateformat';

import PrintMarkdown from '@components/PrintMarkdown';
import Title from '@components/Title';
import { makeStyles, Typography } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { Post } from '@models/post';

import Logo from '../Layout/Logo.svg';

const useStyles = makeStyles(() => ({
  body: {
    '& img': {
      width: '100%',
    },
  },
}));
type Props = {
  post: Post;
};

const BlogPostFull: React.FC<Props> = ({ post }) => {
  const { title, body, heroImageUrl, publishDate } = post;
  const formattedDate = publishDate && dateformat(new Date(publishDate), 'longDate');
  const classes = useStyles();
  return (
    <>
      <Title title={title} />
      <Typography variant="overline">{formattedDate}</Typography>
      {heroImageUrl && <SvgIcon component={Logo} viewBox="0 0 100 100" />}
      <Typography variant="body1" align="justify" className={classes.body}>
        <PrintMarkdown markdown={body} />
      </Typography>
    </>
  );
};

export default BlogPostFull;
