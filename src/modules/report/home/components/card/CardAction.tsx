interface CardActionProps {
  title: string;
  icon: React.ReactNode;
  onClick?: (event: any) => void;
  type: 'submit' | 'button';
}

export function CardAction({ title, icon, onClick, type }: CardActionProps) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="whitespace-nowrap bg-primaryColor rounded-[8px] w-auto btn btn-primary btn-lg flex p-[12px 20px] justify-center items-center gap-[8px] "
      >
        {icon}
        {title}
      </button>
    </div>
  );
}
