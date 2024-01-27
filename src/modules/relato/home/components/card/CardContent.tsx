interface IContentProps {
  title: string;
  description: string;
}

export function CardContent({ title, description }: IContentProps) {
  return (
    <div className="flex flex-col gap-[11px] items-center justify-center text-center">
      <div className="text-[#1D2939] font-inter font-semibold text-[30px] leading-9">
        {title}
      </div>
      <div className="text-[#1D2939] text-center font-inter text-[19px] leading-7">
        {description}
      </div>
    </div>
  );
}
