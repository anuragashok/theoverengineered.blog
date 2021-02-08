import { isInternalLink } from 'is-internal-link';
/* eslint-disable react/jsx-props-no-spreading */
import NextLink, { LinkProps } from 'next/link';

import { Button, Link as MaterialLink } from '@material-ui/core';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = (props) => {
  const { href, children } = props;
  const hrefstr = href.toString();

  if (children.toString().startsWith('Embedded content')) {
    return (
      <a href={hrefstr} className="embedly-card" data-card-width="100%" data-card-controls="0">
        {children}
      </a>
    );
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
