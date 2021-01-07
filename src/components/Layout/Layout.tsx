import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

import { SITE_TITLE } from '@lib/siteinfo';
import { Container, createStyles, makeStyles } from '@material-ui/core';

import Body from './Body';
import Header from './Header';
import Meta from './Meta';

const Footer = dynamic(import('./Footer'));
type Props = {
  pageTitle: string;
  pageDescription: string;
  url: string;
  children: React.ReactNode;
  image: string;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      minHeight: '100vh',
    },
  })
);

const Layout: React.FC<Props> = ({ pageTitle, pageDescription, url, children, image }) => {
  const classes = useStyles();
  return (
    <>
      <Meta url={url} title={pageTitle} description={pageDescription} image={image} />
      <Head>
        <title>
          {pageTitle} | {SITE_TITLE}
        </title>
      </Head>
      <div className={classes.root}>
        <Container maxWidth={false} disableGutters>
          <Header />
          <Container maxWidth="lg">
            <Body>{children}</Body>
          </Container>
          <Footer url={url} title={pageTitle} description={pageDescription} />
        </Container>
      </div>
    </>
  );
};

export default Layout;
