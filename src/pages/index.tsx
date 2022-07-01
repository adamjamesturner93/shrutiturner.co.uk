import Image from 'next/image';
import { AppTemplate } from '../templates/app';
import { groq } from 'next-sanity';
import { getClient } from '../lib';
import { GetStaticProps } from 'next';

type LandingPageProps = {
  title: string;
  tagLine: string;
};

type Props = {
  data: LandingPageProps;
};

export default function Home({ data }: Props) {
  const { tagLine, title } = data;
  return (
    <AppTemplate className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold">
          {title}
        </h1>
        <p className="text-center sm:text-lg sm:font-medium">{tagLine}</p>
      </div>
      <figure className="relative aspect-square w-full mx-auto max-w-xs overflow-hidden md:max-w-md lg:max-w-lg">
        <Image
          src="/shruti.jpeg"
          alt="Shruti Turner"
          layout="fill"
          className="object-contain"
        />
      </figure>
    </AppTemplate>
  );
}

const query = groq`*[_type == "landingPage"][0]`;

export const getStaticProps: GetStaticProps<Props> = async ({
  preview = false,
}) => {
  const data = await getClient(preview).fetch<LandingPageProps>(query);

  return {
    props: {
      data,
    },
  };
};
