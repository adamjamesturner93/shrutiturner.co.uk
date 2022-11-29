import Link from 'next/link';
import DateComponent from '../components/date';
import CoverImage from './cover-image';
import TagsComponent from './tags';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  tagsCollection,
  slug,
}) {
  return (
    <article>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>

        <TagsComponent tags={tagsCollection} />
      </div>
      <div className="mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </article>
  );
}
