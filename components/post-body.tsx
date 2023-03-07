import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Post } from '../types/post';
import Block from './block';
import markdownStyles from './markdown-styles.module.scss';
import { TableOfContents } from './post-toc';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function PostBody({ content }: { content: Post['markdown'] }) {
  return (
    <Block>
      <TableOfContents content={content} />
      <div id="content" className={markdownStyles['markdown']}>
        <ReactMarkdown
          components={{
            h2({ children, ...props }) {
              return (
                <h2 id={children as string} {...props}>
                  {children}
                </h2>
              );
            },
            h3({ children, ...props }) {
              return (
                <h3 id={children as string} {...props}>
                  {children}
                </h3>
              );
            },
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={coldarkDark as any}
                  language={match[1]}
                  wrapLongLines
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </Block>
  );
}

export function PostCaption({ content }) {
  return (
    <figcaption className="text-center ">
      {documentToReactComponents(content?.json)}
    </figcaption>
  );
}
