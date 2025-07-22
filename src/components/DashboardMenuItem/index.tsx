type DashboardMenuItemProps = {
  title: string;
  icon?: React.ReactNode;
};

export const DashboardMenuItem = ({ title, icon }: DashboardMenuItemProps) => {
  return (
    <div className="p-2 text-[0.9rem] rounded-md flex items-center hover:bg-gray-200 cursor-pointer font-[500]">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </div>
  );
};
