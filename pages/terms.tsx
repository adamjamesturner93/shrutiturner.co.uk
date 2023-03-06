import Container from '../components/container';
import { Layout } from '../components/layout';
import Head from 'next/head';
import Header from '../components/header';

function Index({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Terms of Use | Shruti Turner</title>
      </Head>
      <Container>
        <Header />
        <h1 className="mb-4 text-6xl">Terms of use</h1>
        <h2 className="mb-4 text-2xl lg:text-3xl leading-tight">Blog</h2>
        <p>
          This is a personal blog. Any views or opinions represented in this
          blog are personal and belong solely to the blog owner and do not
          represent those of people, institutions or organizations that the
          owner may or may not be associated with in professional or personal
          capacity, unless explicitly stated.
        </p>

        <p>
          Any views or opinions are not intended to malign any religion, ethnic
          group, club, organization, company, or individual.
        </p>

        <p>
          All content provided on this blog is for informational purposes only.
          The owner of this blog makes no representations as to the accuracy or
          completeness of any information on this site or found by following any
          link on this site.
        </p>

        <p>
          The owner will not be liable for any errors or omissions in this
          information nor for the availability of this information. The owner
          will not be liable for any losses, injuries, or damages from the
          display or use of this information.
        </p>

        <h2 className="mb-4 text-2xl lg:text-3xl leading-tight">
          Downloadable Files and Images
        </h2>

        <p>
          Any downloadable file, including but not limited to pdfs, docs, jpegs,
          pngs, is provided at the user’s own risk. The owner will not be liable
          for any losses, injuries, or damages resulting from a corrupted or
          damaged file.
        </p>
      </Container>
    </Layout>
  );
}

export default Index;
