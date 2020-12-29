import Prism from 'prismjs';
import React from 'react';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import unified from 'unified';

import Image from './Image';
import { Link } from './Link';

type Props = {
  markdown: string;
};

const PrintMarkdown: React.FC<Props> = ({ markdown }) => {
  // eslint-disable-next-line global-require
  require('prismjs/components/prism-jsx.min');
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
        img: Image,
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
