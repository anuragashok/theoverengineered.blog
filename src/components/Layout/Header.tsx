import React from 'react';

import { Link } from '@components/Link';
import { SITE_TITLE } from '@lib/siteinfo';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Logo from './Logo.svg';
import PrimaryNavigation from './PrimaryNavigation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    borderBottom: '1px solid #eeeeee',
    color: theme.palette.text.primary,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'inline-flex',
  },
  logocontainer: {},
  titlecontainer: {
    flexGrow: 2,
    overflow: 'hidden',
  },
  navigationcontainer: {
    textAlign: 'right',
  },
  logo: {
    fontSize: theme.typography.pxToRem(60),
    marginRight: theme.spacing(2),
    color: theme.palette.primary.dark,
  },

  title: {
    flexGrow: 1,
    fontSize: '1.3rem',
    color: theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.3rem',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <div className={classes.logocontainer}>
              <Link href="/">
                <SvgIcon component={Logo} className={classes.logo} viewBox="0 0 100 100" />
              </Link>
            </div>

            <div className={classes.titlecontainer}>
              <Typography className={classes.title} variant="h4" noWrap>
                <Link href="/">{SITE_TITLE}</Link>
              </Typography>
            </div>

            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <div className={classes.navigationcontainer}>
              <PrimaryNavigation />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
