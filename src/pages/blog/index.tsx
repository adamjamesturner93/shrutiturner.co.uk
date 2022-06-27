import Image from 'next/image';
import { groq } from 'next-sanity';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

import { getClient, usePreviewSubscription, urlFor } from '../../lib';
import { AppTemplate } from '../../templates/app';
import { Post } from '../../types/schema';
import { Link } from '../../components/link';

type BlogProps = {
  postdata: Post[];
  preview: boolean;
};

export default function Blog(props: BlogProps) {
  const { postdata, preview } = props;

  const router = useRouter();

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <AppTemplate className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="text-center text-4xl font-semibold">My Blog</h1>
        <p className="text-center text-lg font-medium">
          Shruti&apos;s ramblings
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 h-full overflow-scroll">
        {posts.map(({ _id, title, mainImage, slug }) => {
          console.log({ _id, title, mainImage, slug });
          return (
            <Link key={_id} href={`/blog/${slug?.current}`}>
              <div className="relative aspect-square w-full">
                <Image
                  priority={false}
                  src={urlFor(mainImage)}
                  alt="temp"
                  layout="fill"
                  className=""
                />
                <div className="bg-slate-800 py-2 px-4 flex flex-col rounded opacity-80 text-gray-100 absolute -translate-x-1/2 -translate-y-1/2 top-3/4 left-1/2">
                  <h2>{title}</h2>
                  {/* <span>{categories}</span> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </AppTemplate>
  );
}

const query = groq`
*[_type == "post"] | order(_createdAt desc) {
  ..., 
  author->,
  categories[]->
}
`;

export const getStaticProps: GetStaticProps<BlogProps> = async ({
  preview = false,
}) => {
  const postdata = await getClient(preview).fetch(query);

  return {
    props: {
      postdata,
      preview,
    },
    revalidate: 10,
  };
};
