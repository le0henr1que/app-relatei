interface CheckboxProps {
  label: string;
  checked: boolean;

  // onChange: (checked: boolean) => void;
}

export function QuestionCheck({ label, checked }: CheckboxProps) {
  return (
    <div className="flex flex-col items-start content-start gap-x-16 gap-y-48 self-stretch flex-wrap ">
      <label className="text-sm text-gray-600">
        <input
          type="checkbox"
          checked={checked}
          //  onChange={(e) => onChange(e.target.checked)}
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
}
