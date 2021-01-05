/* eslint-disable react/no-danger */

import dateformat from 'dateformat';
import hydrate from 'next-mdx-remote/hydrate';

import Media from '@components/Media';
import Title from '@components/Title';
import { components } from '@lib/markdown';
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
  const content = hydrate(body, { components });

  return (
    <>
      <Title title={title} />
      <Typography variant="overline">{formattedDate}</Typography>
      <Typography variant="body1" align="justify" className={classes.body}>
        {content}
      </Typography>
    </>
  );
};

export default BlogPostFull;
