"use client";

import { MdAdd } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type HeaderDashboardProps = {
  title?: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
};

export const HeaderDashboard = ({
  title,
  subtitle,
  rightElement,
}: HeaderDashboardProps) => {
  const router = useRouter();
  return (
    <div className="p-5 bg-white flex items-center justify-between border-b">
      <div>
        <div className="font-bold text-3xl">{title}</div>
        <div>{subtitle}</div>
      </div>
      {rightElement && rightElement}
    </div>
  );
};
