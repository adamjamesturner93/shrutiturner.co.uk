import Link from 'next/link';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import { Layout } from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout preview={preview}>
      <Head>
        <title>Under construction</title>
      </Head>
      <Container>
        <p className="text-center">
          <Link
            href="https://shrutiturner.co.uk"
            className="text-blue-700 underline hover:text-blue-500"
          >
            shrutiturner.co.uk
          </Link>{' '}
          is currently under construction. Please come back soon!
        </p>
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
