import clsx from 'clsx';
import { Link } from '../link';

export const NavBarItem = ({
  href,
  label,
  active,
  mobile = false,
}: {
  href: string;
  label: string;
  active: boolean;
  mobile?: boolean;
}) => (
  <Link
    href={href}
    className={clsx(
      'hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium',
      active ? 'bg-gray-700 text-gray-300 hover:text-white' : 'text-white',
      mobile && 'block',
    )}
  >
    {label}
  </Link>
);
