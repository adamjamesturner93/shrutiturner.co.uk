import NextLink from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = { href: string } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({ href, ...props }: Props) {
  return (
    <NextLink href={href} scroll={false}>
      <a {...props} />
    </NextLink>
  );
}
