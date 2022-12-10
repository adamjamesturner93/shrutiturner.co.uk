import ContentfulImage from './contentful-image';
import Link from 'next/link';
import cn from 'classnames';
import { PostCaption } from './post-body';

export default function CoverImage({
  title,
  url,
  slug,
  className,
  caption,
}: {
  title: string;
  url: string;
  slug?: string;
  className?: string;
  caption?: any;
}) {
  const image = (
    <ContentfulImage
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small, object-contain', className, {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
    />
  );

  return (
    <figure className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
      <PostCaption content={caption} />
    </figure>
  );
}
