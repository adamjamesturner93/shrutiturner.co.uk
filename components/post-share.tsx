import Link from 'next/link';
import { FacebookIcon } from './icons/facebook';
import { LinkedinIcon } from './icons/linkedin';
import { TwitterIcon } from './icons/twitter';

export default function PostShare({ slug }: { slug: string }) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-end mt-16">
      <h3 className="font-bold text-lg">Share Now</h3>
      <div className="flex gap-4">
        <Link
          target="blank"
          title="Share on Facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//shrutiturner.co.uk/posts/${slug}`}
        >
          <FacebookIcon />
        </Link>
        <Link
          target="blank"
          title="Share on LinkedIn"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//shrutiturner.co.uk/posts/${slug}`}
        >
          <LinkedinIcon />
        </Link>
        <Link
          target="blank"
          title="Share on Twitter"
          href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20by%20%40shrutiturner%20-%20https%3A//shrutiturner.co.uk/posts/${slug}`}
        >
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
}
