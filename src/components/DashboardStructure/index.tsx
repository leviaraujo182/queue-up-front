"use client";

import { DashboardMenuItem } from "../DashboardMenuItem";
import { FiHome } from "react-icons/fi";
import { LuBuilding } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { Badge } from "../Badge";
import { CardInfo } from "../CardInfo";
import { Button } from "../ui/button";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuWrench } from "react-icons/lu";
import { Card, CardHeader } from "../ui/card";

export const DashboardStructure = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[15%] h-full border-r bg-[#f5f5f5] flex-1">
        <div className="p-6 flex items-center justify-center border-b">
          <div className="flex gap-2">
            <div className="p-5 bg-gradient-to-r from-blue-800 to-purple-600 rounded-md"></div>
            <div
              onClick={() => {}}
              className="font-[800] cursor-pointer text-3xl bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent w-fit inline-block"
            >
              QueueUp
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="text-gray-500 p-2 font-[600] text-[0.9rem]">
            <div>Menu Principal</div>
          </div>
          <div className="flex flex-col">
            <DashboardMenuItem title="Dashboard" icon={<FiHome size={18} />} />
            <DashboardMenuItem
              title="Meus estabelecimentos"
              icon={<LuBuilding size={18} />}
            />
            <DashboardMenuItem
              title="Configurações"
              icon={<LuSettings2 size={18} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full p-5 bg-white">
        <div className="w-full p-3 border-b">
          <BsLayoutSidebarInset size={22} className="cursor-pointer" />
        </div>
        <div className="p-5 flex items-center justify-between border-b">
          <div>
            <div className="font-bold text-3xl">Barbearia do João</div>
            <div>Barbearia</div>
          </div>
          <Badge label="Aberto" />
        </div>
        <div className="w-full h-[calc(100vh-170px)] bg-[#f8f8ff] gap-5 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardStructure;
