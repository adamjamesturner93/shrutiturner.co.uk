import Container from './container';
import cn from 'classnames';
import Link from 'next/link';

export default function Alert({ preview = false }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        {preview && (
          <p className="py-2 text-center text-sm w-full ">
            This is page is a preview.{' '}
            <Link
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </Link>{' '}
            to exit preview mode.
          </p>
        )}
      </Container>
    </div>
  );
}
