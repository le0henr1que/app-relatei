import { ReactNode } from 'react';

export function QuestionRoot({ children }: { children: ReactNode }) {
  return (
    <div className="h-{72px} flex flex-col  items-start gap-4 self-stretch">
      {children}
    </div>
  );
}
