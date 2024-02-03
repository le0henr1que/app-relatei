interface CardActionProps {
  title: string;
  icon: React.ReactNode;
  onClick: (event: any) => void;
}

export function CardAction({ title, icon, onClick }: CardActionProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#7F56D9] rounded-[8px] w-[199px] btn btn-primary btn-lg flex p-[12px 20px] justify-center items-center gap-[8px] "
      >
        {icon}
        {title}
      </button>
    </div>
  );
}
