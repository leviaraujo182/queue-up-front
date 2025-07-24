type DashboardMenuItemProps = {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const DashboardMenuItem = ({
  title,
  icon,
  onClick,
}: DashboardMenuItemProps) => {
  return (
    <div
      className="p-2 text-[0.9rem] rounded-md flex items-center hover:bg-gray-200 cursor-pointer font-[500]"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </div>
  );
};
