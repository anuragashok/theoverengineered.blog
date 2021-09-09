import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Caption from '@components/Caption';
import { Link } from '@components/Link';
import Media from '@components/Media';
import Quote from '@components/Quote';
import { Divider } from '@material-ui/core';
import React from 'react';
import type { CodeComponent } from 'react-markdown/lib/ast-to-react';

type CodeProps = Parameters<CodeComponent>[0];

type Props = { children: string };

const Markdown: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ href, ...props }) => <Link href={href} {...props} />,
        img: ({ alt, src, ...props }) => <Media src={src} alt={alt} {...props} />,
        h6: ({ node, ...props }) => <Caption {...props} />,
        blockquote: ({ node, ...props }) => <Quote {...props} />,
        hr: () => <Divider />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

Markdown.displayName = 'Markdown';
export default Markdown;
