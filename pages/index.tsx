import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import { Layout } from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Shruti Turner | Machine Learning Engineer</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />
        {heroPost && <HeroPost {...heroPost} />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];

  return {
    props: { preview, allPosts },
  };
}

export default Index;
