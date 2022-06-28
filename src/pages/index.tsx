import Image from 'next/image';
import { AppTemplate } from '../templates/app';

export default function Home() {
  return (
    <AppTemplate className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold">
          Hi, I&apos;m Shruti Turner
        </h1>
        <p className="text-center sm:text-lg sm:font-medium">
          Yogi | PhD | Machine Learning Engineer
        </p>
      </div>
      <figure className="relative aspect-square w-full mx-auto max-w-xs overflow-hidden md:max-w-md lg:max-w-lg">
        <Image
          src="/profile.jpeg"
          alt="Shruti Turner"
          layout="fill"
          className="object-contain"
        />
      </figure>
    </AppTemplate>
  );
}
