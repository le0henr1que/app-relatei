interface PContentProps {
  title: string;
}

export function PerguntaContent({ title }: PContentProps) {
  return (
    <div className="flex h-[72px] flex-col self-stretch items-start text-xl font-bold">
      {title}
    </div>
  );
}
