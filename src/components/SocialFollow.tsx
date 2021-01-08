import React from 'react';
import { FaDev, FaMedium, FaRssSquare } from 'react-icons/fa';

import { SOCIAL_MEDIA_URLS } from '@lib/siteinfo';
import theme from '@lib/theme';
import { Card, CardActions, CardHeader, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      textAlign: 'center',
    },

    linkedin: {
      fontSize: '3em',
      color: '#2867B2',
      marginRight: theme.spacing(1),
    },
    github: {
      fontSize: '3em',
      color: 'black',
      marginRight: theme.spacing(1),
    },
    medium: {
      fontSize: '3em',
      color: 'black',
      marginRight: theme.spacing(1),
    },
    devto: {
      fontSize: '3em',
      color: 'black',
      marginRight: theme.spacing(1),
    },
    rss: {
      fontSize: '3em',
      color: '#ee802f',
    },
    wrapper: {
      margin: 'auto',
    },
  })
);

const SocialFollow: React.FC = () => {
  const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardHeader title="Subscribe" className={classes.header} />
      <CardActions>
        <div className={classes.wrapper}>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL_MEDIA_URLS.medium} title="Medium">
            <FaMedium fontSize="large" className={classes.medium} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL_MEDIA_URLS.devto} title="Dev.to">
            <FaDev fontSize="large" className={classes.devto} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/rss.xml" title="RSS Feed">
            <FaRssSquare fontSize="large" className={classes.rss} />
          </a>
        </div>
      </CardActions>
    </Card>
  );
};

export default SocialFollow;
