import { ReactNode } from 'react';

export function CardRoot({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-[20px] w-[387px] p-[24px] border rounded-[15px] border-solid border-gray-300 justify-center">
      {children}
    </div>
  );
}
