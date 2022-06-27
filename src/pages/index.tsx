import Image from 'next/image';
import { AppTemplate } from '../templates/app';

export default function Home() {
  return (
    <AppTemplate className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="text-center text-4xl font-semibold">
          Hi, I&apos;m Shruti Turner
        </h1>
        <p className="text-center text-lg font-medium">
          Yogi | PhD | Data Scientist
        </p>
      </div>
      <figure className="relative aspect-square w-full mx-auto max-w-xs rounded-full overflow-hidden md:max-w-md lg:max-w-lg">
        <Image src="https://picsum.photos/500" alt="temp" layout="fill" />
      </figure>
    </AppTemplate>
  );
}
