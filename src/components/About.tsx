import React from 'react';

import { Avatar, Card, CardContent, CardHeader, createStyles, makeStyles, Typography } from '@material-ui/core';

import Image from './Image';
import { Link } from './Link';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} variant="rounded">
            <Image src="/anurag.jpg" />
          </Avatar>
        }
        title="Anurag Ashok"
        subheader="Author"
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          I am curious person who enjoys building software. My primary focus has been Java-based microservices. I am
          also expirimenting with the javascript ecosystem for web. I love all things code, and am very passionate about
          &quot;everything as code&quot;.
          <Link href="/about">Read More</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
