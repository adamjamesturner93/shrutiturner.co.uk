import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import { AppTemplate } from '../../templates/app';
import { getClient } from '../../lib/sanity.server';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../types/schema';

type PostProps = {
  post: Post;
  preview: boolean;
};

export default function PostPage({ post }: PostProps) {
  const { title } = post;
  return (
    <AppTemplate className="">
      <h1>{title}</h1>
    </AppTemplate>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient(false).fetch<string[]>(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`,
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
}) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = params?.slug || '';
  const post = await getClient(preview).fetch(
    groq`
      *[_type == "post" && slug.current == $slug][0]
    `,
    { slug },
  );
  return {
    props: {
      post,
      preview,
    },
    revalidate: 3,
  };
};
