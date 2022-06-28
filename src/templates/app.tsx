import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';
import { NavBar } from '../components/navbar';

export const AppTemplate = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <>
    <NextSeo
      title="Shruti Turner"
      titleTemplate="Shruti Turner"
      defaultTitle="Shruti Turner"
      description="An expert in research, having completed her PhD at Imperial College London, now a machine learning engineer"
      canonical="https://shrutiturner.co.uk"
      openGraph={{
        url: 'https://shrutiturner.co.uk',
        title: 'Shruti Turner',
        description:
          'An expert in research, having completed her PhD at Imperial College London, now a machine learning engineer',
        images: [
          {
            url: '/og.jpeg',
            width: 800,
            height: 420,
            alt: 'Shruti Turner',
          },
        ],
      }}
      twitter={{
        handle: '@shrutiturner',
        site: '@shrutiturner',
        cardType: 'summary_large_image',
      }}
    />
    <NavBar />
    <main
      className={clsx(
        'flex py-4 grow max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-700 text-gray-100 overflow-hidden',
        className,
      )}
    >
      {children}
    </main>
    <footer className="bg-gray-700 text-white text-center">
      &copy;{new Date().getFullYear()}
    </footer>
  </>
);
