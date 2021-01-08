import React from 'react';
import { FaDev, FaMedium } from 'react-icons/fa';
import { RWebShare as WebShare } from 'react-web-share';

import { getFullUrl, SOCIAL_MEDIA_URLS } from '@lib/siteinfo';
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
      lineHeight: '2.5em',
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    medium: {
      backgroundColor: 'black',
      marginRight: theme.spacing(1),
    },
    devto: {
      backgroundColor: 'black',
      marginRight: theme.spacing(1),
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
          url: getFullUrl(url),
          title,
        }}
      >
        <Button variant="contained" color="primary" endIcon={<ShareIcon />}>
          Share
        </Button>
      </WebShare>
      <Divider light className={classes.divider} />
      <Typography variant="body1" color="textPrimary" className={classes.textStyle} component="p">
        <div>Liked the article ? You can follow the blog at </div>
        <Button
          target="_blank"
          href={SOCIAL_MEDIA_URLS.medium}
          variant="contained"
          color="primary"
          endIcon={<FaMedium />}
          className={classes.medium}
        >
          Medium
        </Button>
        <Button
          target="_blank"
          href={SOCIAL_MEDIA_URLS.devto}
          variant="contained"
          color="primary"
          endIcon={<FaDev />}
          className={classes.devto}
        >
          DEV
        </Button>
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
