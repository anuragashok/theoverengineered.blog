import React from 'react';
import { RWebShare as WebShare } from 'react-web-share';

import { Link } from '@components/Link';
import { Container, Fab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: 'white',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    borderTop: '1px solid #eeeeee',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),
    display: 'inline-flex',
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    textAlign: 'center',
    display: 'block',
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
}));

type Props = {
  url: string;
  description: string;
  title: string;
};
const Footer: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { description, title, url } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar className={classes.toolbar}>
            <Typography variant="body2" display="block" paragraph gutterBottom>
              &#169; Anurag Ashok 2020
            </Typography>
            <Typography variant="body2" display="block">
              Powered by <Link href="https://nextjs.org/">Next.js</Link> &{' '}
              <Link href="https://pages.github.com/">GitHub Pages</Link>
            </Typography>
            <Typography variant="body2" display="block">
              Designed with <Link href="https://nextjs.org/">Material-UI</Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <WebShare
        data={{
          text: description,
          url,
          title,
        }}
      >
        <Fab color="primary" aria-label="share" className={classes.fab}>
          <ShareIcon />
        </Fab>
      </WebShare>
    </div>
  );
};

export default Footer;
