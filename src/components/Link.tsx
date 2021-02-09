import { isInternalLink } from 'is-internal-link';
/* eslint-disable react/jsx-props-no-spreading */
import NextLink, { LinkProps } from 'next/link';
import Gist from 'react-gist';

import { Button, Link as MaterialLink } from '@material-ui/core';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = (props) => {
  const { href, children } = props;
  const hrefstr = href.toString();

  if (children.toString().startsWith('Embedded content')) {
    const url = new URL(hrefstr);
    const gistId = url.pathname.split('/')[2];
    const fileName = url.searchParams.get('file');

    const gistProps = {
      id: gistId,
      ...(fileName && { file: fileName }),
    };

    return <Gist {...gistProps} />;
  }

  return isInternalLink(hrefstr) ? (
    <NextLink {...props} passHref>
      <MaterialLink>{children}</MaterialLink>
    </NextLink>
  ) : (
    <a href={hrefstr} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export const ButtonLink: React.FC<React.PropsWithChildren<LinkProps>> = (props) => {
  const { children } = props;
  return (
    <NextLink {...props} passHref>
      <MaterialLink component={Button}>{children}</MaterialLink>
    </NextLink>
  );
};
