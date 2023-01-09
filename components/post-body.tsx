import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Post } from '../types/post';
import Block from './block';
import markdownStyles from './markdown-styles.module.scss';
import { TableOfContents } from './post-toc';
import RichTextAsset from './rich-text-asset';

const customMarkdownOptions = (content: Post['content']) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 id={children}>{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h3 id={children} className="italic">
          {children}
        </h3>
      );
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return (
        <h4 className="italic" id={children}>
          {children}
        </h4>
      );
    },
  },
});

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
