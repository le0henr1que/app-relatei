import { ReactNode } from 'react';

export function QuestionRoot({ children }: { children: ReactNode }) {
  return (
    <div className="w-[797px] flex flex-col items-start gap-[40px] ">
      {children}
    </div>
  );
}
