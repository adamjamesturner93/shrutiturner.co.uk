import ContentfulImage from './contentful-image';

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <figure>
        <ContentfulImage
          src={asset.url}
          fill
          alt={asset.description}
          className="!relative"
        />
        <figcaption className="italic">{asset.title}</figcaption>
      </figure>
    );
  }

  return null;
}
