import '../hljs.css';

import { AppProps } from 'next/app';
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TagManager from 'react-gtm-module';

import theme from '@lib/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

export default function MyApp(props: AppProps): React.ReactElement {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-K7JJJSS' });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
