import { ReactNode } from 'react';

export function Main({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="flex w-[95%]">{children}</div>
    </div>
  );
}
