"use client";

import { CardInfo } from "@/components/CardInfo";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { VscVmActive } from "react-icons/vsc";
import { FaRegClock } from "react-icons/fa6";
import { DashboardEstablishmentItem } from "@/components/DashboardEstablishmentItem";
import { ClipLoader } from "@/components/ClipLoader";
import { useRouter } from "next/navigation";
import {
  useEstablishmentMetrics,
  useUserEstablishments,
} from "@/hooks/useEstablishment";

export default function Establishment() {
  const { data, isLoading, error } = useUserEstablishments();
  const {
    data: metricsData,
    isLoading: metricsLoading,
    error: metricsError,
  } = useEstablishmentMetrics();

  const router = useRouter();

  return (
    <div>
      <div className="p-5 bg-white flex items-center justify-between border-b">
        <div>
          <div className="font-bold text-3xl">Meus Estabelecimentos</div>
          <div>Olá, Levi Araujo</div>
        </div>
        <Button
          onClick={() => router.push("/administrative/create-establishment")}
        >
          <MdAdd size={20} />
          <div>Adicionar estabelecimento</div>
        </Button>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex gap-5 w-full">
          <CardInfo
            isLoading={isLoading}
            title="Total de estabelecimentos"
            content={
              <div className="text-4xl font-bold">
                {metricsData?.totalEstablishments}
              </div>
            }
            icon={<FaRegBuilding className="text-blue-600" />}
          />
          <CardInfo
            isLoading={isLoading}
            title="Estabelecimentos ativos"
            content={
              <div className="text-4xl font-bold">
                {metricsData?.totalActiveEstablishments}
              </div>
            }
            icon={<VscVmActive className="text-green-600" />}
          />
          <CardInfo
            title="Estabelecimentos inativos"
            isLoading={isLoading}
            content={
              <div className="text-4xl font-[600]">
                {metricsData?.totalInactiveEstablishments}
              </div>
            }
            icon={<FaRegClock className="text-purple-600" />}
          />
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-[calc(100vh-400px)]">
            <ClipLoader color="purple" size={20} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 overflow-y-auto h-[calc(100vh-400px)] justify-items-center">
            {data?.map((establishment: any) => (
              <DashboardEstablishmentItem
                key={establishment.id}
                establishment={establishment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
