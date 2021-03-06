import React from 'react';

import { ButtonLink } from '@components/Link';
import { PRIMARY_NAV_LINKS } from '@lib/siteinfo';
import { Drawer, Hidden, List, ListItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const PrimaryNavigation: React.FC = () => {
  const classes = useStyles();
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  return (
    <>
      <nav>
        <style jsx>{`
          nav :global(a) {
            min-width: 30px !important;
          }
        `}</style>
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor="right"
            open={drawerState}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
            <div>
              <List>
                {PRIMARY_NAV_LINKS.map((link) => (
                  <ListItem button key={link.name}>
                    <ButtonLink href={link.url}>
                      {(link.name === 'GitHub' && (
                        <>
                          <GitHubIcon /> &nbsp; GitHub
                        </>
                      )) ||
                        (link.name === 'LinkedIn' && (
                          <>
                            <LinkedInIcon /> &nbsp; LinkedIn
                          </>
                        )) ||
                        link.name}
                    </ButtonLink>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="js">
          {PRIMARY_NAV_LINKS.map((link) => (
            <ButtonLink href={link.url} key={link.url}>
              {(link.name === 'GitHub' && <GitHubIcon />) ||
                (link.name === 'LinkedIn' && <LinkedInIcon />) ||
                link.name}
            </ButtonLink>
          ))}
        </Hidden>
      </nav>
      <IconButton
        edge="end"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default PrimaryNavigation;
