import DateComponent from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import Tags from './tags';

export default function PostHeader({ title, coverImage, date, tags }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-center md:justify-start mb-3">
        <Tags tags={tags} />
      </div>
      <div className="hidden md:block md:mb-12"></div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6"></div>
        <div className="mb-6">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
