import { Card, CardContent, CardHeader, createStyles, makeStyles, Typography } from '@material-ui/core';

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
    <Card className={classes.root} raised>
      <CardHeader title="Anurag Ashok" titleTypographyProps={{ variant: 'h5' }} subheader="Author" />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          I am from Mumbai, India; building software for Singapore Airlines @ Singapore. I enjoy all things code and am
          particularly passionate about automation and &quot;everything as code&quot;. In my 8+ years of making code
          work, I have experimented with several languages but focused primarily on java microservices and the
          javascript ecosystem.
          <Link href="/about">Read More</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
