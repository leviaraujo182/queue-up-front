import { Badge } from "@/components/Badge";
import { CardInfo } from "@/components/CardInfo";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { VscVmActive } from "react-icons/vsc";
import { FaRegClock } from "react-icons/fa6";
import { DashboardEstablishmentItem } from "@/components/DashboardEstablishmentItem";

export default function Establishment() {
  return (
    <div>
      <div className="p-5 bg-white flex items-center justify-between border-b">
        <div>
          <div className="font-bold text-3xl">Meus Estabelecimentos</div>
          <div>Olá, Levi Araujo</div>
        </div>
        <Button>
          <MdAdd size={20} />
          <div>Adicionar estabelecimento</div>
        </Button>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex gap-5 w-full">
          <CardInfo
            title="Total de estabelecimentos"
            content={<div className="text-4xl font-bold">1</div>}
            icon={<FaRegBuilding className="text-blue-600" />}
          />
          <CardInfo
            title="Estabelecimentos ativos"
            content={<div className="text-4xl font-bold">1</div>}
            icon={<VscVmActive className="text-green-600" />}
          />
          <CardInfo
            title="Criado em"
            content={<div className="text-2xl font-[600]">23/07/2025</div>}
            icon={<FaRegClock className="text-purple-600" />}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-auto h-[calc(100vh-400px)]">
          <DashboardEstablishmentItem />
          <DashboardEstablishmentItem />
          <DashboardEstablishmentItem />
          <DashboardEstablishmentItem />
        </div>
      </div>
    </div>
  );
}
