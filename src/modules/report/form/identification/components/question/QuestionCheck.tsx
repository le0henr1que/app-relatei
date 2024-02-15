interface CheckboxProps {
  items: any;
  name?: string;
  onChange?: (index: number) => void;
  control?: any;
}

export function QuestionCheck({ items }: CheckboxProps) {
  return (
    <div className="flex w-full justify-between">
      <div className="w-full text-sm text-gray-600 flex justify-between">
        {items.map((item: any, index: any) => (
          <div key={index} className="flex gap-[12px]">
            {item.content}
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
        <span></span>
      </div>
    </div>
  );
}
