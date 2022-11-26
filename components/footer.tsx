import Link from 'next/link';
import Container from './container';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col gap-4 justify-between lg:flex-row items-center">
          <nav>
            <ul className="flex gap-4">
              <li className="text-black-700 underline hover:black-500">
                <Link href="/">Latest</Link>
              </li>
              <li className="text-black-700 underline hover:black-500">
                <Link href="/terms">Terms of use</Link>
              </li>
            </ul>
          </nav>
          <p>
            &copy;{new Date().getFullYear()} by Shruti Turner. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
