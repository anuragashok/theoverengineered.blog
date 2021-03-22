/* eslint-disable react/jsx-props-no-spreading */

import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <script
            data-ad-client="ca-pub-9973160319265149"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <script type="text/javascript"> var infolinks_pid = 3316645; var infolinks_wsid = 0; </script>
          <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
