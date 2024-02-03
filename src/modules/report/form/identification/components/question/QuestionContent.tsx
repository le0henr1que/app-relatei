import { ReactNode } from 'react';

interface PContentProps {
  title: string;
  children: ReactNode;
}

export function QuestionContent({ title, children }: PContentProps) {
  return (
    <div className="w-full">
      <div className="w-full flex mb-[16px] flex-col self-stretch items-start justify-start text-xl font-bold">
        {title}
      </div>
      {children}
    </div>
  );
}
