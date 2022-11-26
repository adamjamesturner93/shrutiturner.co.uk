import Image, { ImageProps } from 'next/image';

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: ImageProps) => {
  return <Image {...props} loader={contentfulLoader} alt={props.alt} />;
};

export default ContentfulImage;
