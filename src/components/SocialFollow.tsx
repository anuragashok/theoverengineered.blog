import React from 'react';

import theme from '@lib/theme';
import { Card, CardActions, CardHeader, createStyles, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      textAlign: 'center',
    },

    linkedin: {
      fontSize: '4em',
      color: '#2867B2',
      marginRight: theme.spacing(2),
    },
    github: {
      fontSize: '3.8em',
      color: 'black',
      marginRight: theme.spacing(2),
    },
    rss: {
      fontSize: '4em',
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
    <Card>
      <CardHeader title="Stay Connected" className={classes.header} />
      <CardActions>
        <div className={classes.wrapper}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anurag-ashok/"
            title="LinkedIn"
          >
            <LinkedInIcon fontSize="large" className={classes.linkedin} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/anuragashok" title="Github">
            <GitHubIcon fontSize="large" className={classes.github} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/rss.xml" title="RSS Feed">
            <RssFeedIcon fontSize="large" className={classes.rss} />
          </a>
        </div>
      </CardActions>
    </Card>
  );
};

export default SocialFollow;
