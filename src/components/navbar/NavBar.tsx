import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavBarItem } from './NavBarItem';

const routes = [
  {
    href: '/',
    label: 'About me',
  },
  // {
  //   href: '/research',
  //   label: 'Research',
  // },
  // {
  //   href: '/projects',
  //   label: 'Projects',
  // },
  {
    href: '/blog',
    label: 'Blog',
  },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <nav
      className="bg-gray-700 sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-orange-400"
      title="Primary navigation"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-bold">Shruti</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {routes.map((route) => (
                  <NavBarItem
                    key={route.href}
                    {...route}
                    active={router.asPath === route.href}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        className="absolute w-full bg-slate-900"
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {routes.map((route) => (
                <NavBarItem key={route.href} {...route} active={false} mobile />
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
