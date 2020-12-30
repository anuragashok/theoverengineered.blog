/* eslint-disable global-require */
import Prism from 'prismjs';
import React from 'react';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import unified from 'unified';

import { createStyles, makeStyles, Typography } from '@material-ui/core';

import { Link } from './Link';
import Media from './Media';

type Props = {
  markdown: string;
};
const captionStyle = makeStyles((theme) =>
  createStyles({
    root: {
      fontStyle: 'italic',
      marginTop: theme.spacing(2),
    },
  })
);
const Caption: React.FC = ({ children }) => {
  const classes = captionStyle();
  return (
    <Typography variant="subtitle2" className={classes.root}>
      {children}
    </Typography>
  );
};

const PrintMarkdown: React.FC<Props> = ({ markdown }) => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);
  const content = unified()
    .use(parse)
    .use(remark2react, {
      sanitize: false,
      remarkReactComponents: {
        a: Link,
        img: Media,
        h6: Caption,
      },
    })
    .processSync(markdown).result;
  return (
    <div>
      {content}
      <style jsx>{`
        div :global(blockquote) {
          margin: 50px auto;
          font-style: italic;
          padding: 15px;
          padding-left: 30px;
          border-left: 8px solid #3f51b5;
          position: relative;
          background: #ededed;
        }

        div :global(blockquote::before) {
          color: #3f51b5;
          font-size: 4em;
          position: absolute;
          left: 10px;
          top: -10px;
          content: ${`"\\201C"`};
        }

        div :global(blockquote::after) {
          content: '';
        }
        div :global(p) {
          margin-bottom: 0.1em;
        }
      `}</style>
    </div>
  );
};

export default PrintMarkdown;
