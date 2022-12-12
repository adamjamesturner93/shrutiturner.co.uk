import DateComponent from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import Tags from './tags';
import Block from './block';

export default function PostHeader({ title, coverImage, date, tags, caption }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-center md:justify-start mb-3">
        <Tags tags={tags} />
      </div>
      <div className="hidden md:block md:mb-12"></div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          className="max-h-[70vh]"
          title={title}
          url={coverImage.url}
          caption={caption}
        />
      </div>
      <Block>
        <div className="block md:hidden mb-6"></div>
        <div className="mb-6">
          <DateComponent dateString={date} />
        </div>
      </Block>
    </>
  );
}
