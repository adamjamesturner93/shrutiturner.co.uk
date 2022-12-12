import { ReactNode } from 'react';

export default function Block({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-7xl mx-auto">
      {children}
    </div>
  );
}
