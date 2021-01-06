import React from 'react';
import { FaDev, FaMedium } from 'react-icons/fa';
import { RWebShare as WebShare } from 'react-web-share';

import { Button, createStyles, makeStyles, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ShareIcon from '@material-ui/icons/Share';

type Props = {
  url: string;
  description: string;
  title: string;
};
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    textStyle: {
      fontStyle: 'italic',
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    medium: {
      backgroundColor: 'black',
    },
    devto: {
      backgroundColor: 'black',
    },
    rss: {
      backgroundColor: '#ee802f',
    },
  })
);

const Comments: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { description, title, url } = props;
  return (
    <>
      <WebShare
        data={{
          text: description,
          url,
          title,
        }}
      >
        <Button variant="contained" color="primary" endIcon={<ShareIcon />}>
          Share
        </Button>
      </WebShare>
      <Divider light className={classes.divider} />
      <Typography variant="body1" color="textPrimary" className={classes.textStyle} component="p">
        <span>Liked the article ? You can follow the blog at </span>
        <Button
          target="_blank"
          href="/rss.xml"
          variant="contained"
          color="primary"
          endIcon={<FaMedium />}
          className={classes.medium}
        >
          Medium
        </Button>
        {'  '}
        <Button
          target="_blank"
          href="/rss.xml"
          variant="contained"
          color="primary"
          endIcon={<FaDev />}
          className={classes.devto}
        >
          DEV
        </Button>
        {'  '} or via {'  '}
        <Button
          target="_blank"
          href="/rss.xml"
          variant="contained"
          color="primary"
          endIcon={<RssFeedIcon />}
          className={classes.rss}
        >
          RSS
        </Button>
      </Typography>
    </>
  );
};

export default Comments;
