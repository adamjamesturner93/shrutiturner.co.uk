import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Post } from '../types/post';
import Block from './block';
import markdownStyles from './markdown-styles.module.scss';
import { TableOfContents } from './post-toc';
import RichTextAsset from './rich-text-asset';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function customMarkdownOptions(content: Post['content']): Options {
  return {
    renderMark: {
      [MARKS.CODE]: (text: string) => {
        if (text.indexOf('$') !== 0)
          return <code className="text-orange-700">{text}</code>;
        return (
          <SyntaxHighlighter
            language="bash"
            style={a11yDark}
            wrapLongLines
            PreTag="span"
            customStyle={{ display: 'flex' }}
          >
            {text}
          </SyntaxHighlighter>
        );
      },
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 id={children as string}>{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <h3 id={children as string} className="italic">
            {children}
          </h3>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return (
          <h4 className="italic" id={children as string}>
            {children}
          </h4>
        );
      },
    },
  };
}

export default function PostBody({ content }: { content: Post['content'] }) {
  return (
    <Block>
      <TableOfContents content={content} />
      <div id="content" className={markdownStyles['markdown']}>
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content),
        )}
      </div>
    </Block>
  );
}

export function PostCaption({ content }) {
  return (
    <figcaption className="text-center ">
      {documentToReactComponents(content?.json, customMarkdownOptions(content))}
    </figcaption>
  );
}
