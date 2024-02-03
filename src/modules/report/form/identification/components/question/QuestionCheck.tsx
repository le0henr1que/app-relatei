interface CheckboxProps {
  items: [
    {
      label: string;
      checked: boolean;
    },
  ];
  name: string;
  onChange: (index: number) => void;
}

export function QuestionCheck({ items, onChange, name }: CheckboxProps) {
  return (
    <div className="flex w-full justify-between">
      <div className="w-full text-sm text-gray-600 flex justify-between">
        {items.map((item, index) => (
          <div key={index} className="flex gap-[12px]">
            <input
              type="radio"
              name={name}
              onChange={() => onChange(index)}
              className="form-radio h-5 w-5 text-[#7F56D9]"
            />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
