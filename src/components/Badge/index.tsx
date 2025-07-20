type BadgeProps = {
  label: string;
};

export const Badge = ({ label }: BadgeProps) => {
  return (
    <div className="text-white font-[600] bg-gray-800 text-[13px] rounded-2xl p-2">
      {label}
    </div>
  );
};
