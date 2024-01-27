export function CardIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex p-5 items-center gap-10 rounded-3xl bg-purple-100">
      {icon}
    </div>
  );
}
