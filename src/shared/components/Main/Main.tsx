import { ReactNode } from 'react';

export function Main({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex w-[1280px] ">{children}</div>
    </div>
  );
}
