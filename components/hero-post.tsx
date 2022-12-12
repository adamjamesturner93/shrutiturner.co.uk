import Link from 'next/link';
import DateComponent from '../components/date';
import CoverImage from '../components/cover-image';
import TagsComponent from './tags';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tagsCollection,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          className="max-h-[70vh]"
          title={title}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <div className="flex justify-between flex-col mb-4">
            <h2 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h2>
            <TagsComponent tags={tagsCollection} />
          </div>
          <div className="mb-4 md:mb-0 text-lg flex gap-2">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
