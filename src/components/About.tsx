import Media from '@components/Media';
import { SOCIAL_MEDIA_URLS } from '@lib/siteinfo';
import { Avatar, Card, CardContent, CardHeader, createStyles, makeStyles, Typography } from '@material-ui/core';

import { Link } from './Link';

type Props = {
  condensed?: boolean;
};
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: '20%',
      width: '100%',
      height: 'auto',
    },
  })
);

const About: React.FC<Props> = ({ condensed }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" elevation={0}>
      <CardHeader
        avatar={
          <Avatar aria-label="Anurag Ashok (Author)" className={classes.avatar}>
            <Media src="/anurag.jpg" alt="Anurag Ashok (Author)" />
          </Avatar>
        }
        title="Author"
        titleTypographyProps={{ variant: 'h5' }}
        subheader="Anurag Ashok"
        subheaderTypographyProps={{ variant: 'h5' }}
      />
      <CardContent>
        <Typography variant={condensed ? 'body2' : 'body1'} color="textPrimary" component="p">
          Thank you for visiting this blog!
          <br />
          <br /> I am Anurag Ashok, from Mumbai, India; at present building software for Singapore Airlines @ Singapore.
          I enjoy all things code and am particularly passionate about automation and &quot;everything as code&quot;. In
          my 8+ years of making code work, I have experimented with several languages but focused primarily on java
          microservices and the javascript ecosystem.
          <br />
          <br />
          You can reach out to me for any dicussions or feedback at
          <Link href={SOCIAL_MEDIA_URLS.linkedin}>LinkedIn</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};
About.defaultProps = {
  condensed: false,
};
export default About;
