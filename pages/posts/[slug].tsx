import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import { Layout } from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import PostShare from '../../components/post-share';
import { Post } from '../../types/post';
import { DiscussionEmbed } from 'disqus-react';

export default function PostPage({
  post,
  morePosts,
  preview,
}: {
  post: Post;
  morePosts?: Post[];
  preview: boolean;
}) {
  const router = useRouter();

  const disqusShortname = 'shrutis-blog';
  const disqusConfig = {
    url: `https://shrutiturner.co.uk/posts/${post?.slug}`,
    identifier: post?.slug, // Single post slug
    title: post?.title, // Single post title
  };

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Shruti Turner</title>
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.coverImage.url} />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_GB" />

                <meta
                  property="og:url"
                  content={`https://shrutiturner.co.uk${router.asPath}`}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                tags={post.tagsCollection}
                caption={post.photoCredit}
              />
              <PostBody content={post.markdown} />
              <PostShare slug={post.slug} />
            </article>
            <SectionSeparator />
            <div>
              <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
