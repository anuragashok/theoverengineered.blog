import Caption from '@components/Caption';
import { Link } from '@components/Link';
import Media from '@components/Media';
import Quote from '@components/Quote';
import { Divider } from '@material-ui/core';

export const components = {
  a: Link,
  img: Media,
  h6: Caption,
  blockquote: Quote,
  hr: Divider,
};

export const mdxOptions = {};
