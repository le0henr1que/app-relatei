import { LegacyRef, forwardRef } from 'react';

export const InputText = forwardRef(
  (
    {
      label,
      placeholder,
      errorMessage,
      value,
      ...props
    }: {
      label: any;
      placeholder?: any;
      errorMessage?: any;
      value?: any;
    },
    ref,
  ) => {
    return (
      <div className="w-full flex flex-col gap-[6px]">
        <label className="text-[#344054] font-inter text-sm md:text-base font-normal font-medium leading-5 md:leading-6">
          {label}
        </label>
        <input
          ref={ref as LegacyRef<HTMLInputElement>}
          className="
          w-full
          data-[error=true]:border-[red]
          data-[error=true]:ring-[red
          focus:outline-none
          flex
          p-3
          items-center
          gap-2
          self-stretch
          rounded-lg
          border
          border-gray-300
          bg-white
        "
          value={value && value}
          placeholder={placeholder}
          id="name"
          data-error={errorMessage ? 'true' : 'false'}
          {...props}
        ></input>
        <p className="w-fullt text-[red] font-inter text-base font-normal">
          {errorMessage}
        </p>
      </div>
    );
  },
);
