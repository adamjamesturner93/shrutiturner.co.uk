import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Block from './block';
import markdownStyles from './markdown-styles.module.scss';
import RichTextAsset from './rich-text-asset';

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
});

export default function PostBody({ content }) {
  return (
    <Block>
      <div className={markdownStyles['markdown']}>
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
