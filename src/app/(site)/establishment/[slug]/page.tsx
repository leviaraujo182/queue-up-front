"use client";

import { Badge } from "@/components/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Warning } from "@/components/Warning";
import { GradientButton } from "@/components/GradientButton";
import { useEffect, useState } from "react";
import { Info } from "@/components/Info";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import {
  useGetEstablishmentById,
  useGetEstablishmentDashboardMetrics,
} from "@/hooks/useEstablishment";
import { getEstablishmentNameByType } from "@/utils/getEstablishmentNameByType";
import { formatPhone } from "@/utils/formatPhone";
import {
  useEnterQueue,
  useGetQueueUser,
  useLeaveQueue,
} from "@/hooks/useQueue";
import { ClipLoader } from "@/components/ClipLoader";

export default function EstablishmentSlug() {
  const params = useParams();
  const slug = params.slug;

  const { data, isLoading } = useGetEstablishmentById(slug as string);
  const leaveQueue = useLeaveQueue();
  const { data: queueUserData } = useGetQueueUser(data?.queueId);
  const enterQueue = useEnterQueue();

  useEffect(() => {
    console.log("QueueUserData atualizado:", queueUserData);
  }, [queueUserData]);

  return (
    <div className="flex w-full items-center justify-center h-full mt-30 ">
      <div className="w-[70%] flex flex-col gap-5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between w-full">
              <div className="text-2xl">{data?.name}</div>
            </CardTitle>
            <CardDescription className="flex gap-4">
              <div className="text-gray-700 text-[1rem]">
                {getEstablishmentNameByType(data?.establishmentType)}
              </div>
              <div className="text-[1rem] flex items-center gap-1">
                <FaRegStar className="text-yellow-500" size={15} />
                <div className="text-gray-700">{data?.rating}</div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex flex-1 flex-col gap-2 text-gray-700">
              <div className="flex items-center gap-2">
                <IoLocationOutline size={18} className="text-gray-700" />
                {data?.establishmentAddress.street}
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={18} className="text-gray-700" />
                {formatPhone(data?.phone || "")}
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock size={18} className="text-gray-700" />
                {data?.openHour} ás {data?.closeHour}
              </div>
            </div>
            <div className="text-gray-700 flex-1">{data?.description}</div>
          </CardContent>
        </Card>
        <div className="flex gap-5">
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                rightElement={
                  <IoMdPeople size={20} className="text-blue-500" />
                }
              >
                <div>Pessoas na fila</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-[700] text-3xl">
              {data?.inQueueUsers}
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                rightElement={
                  <FaRegClock size={18} className="text-green-600" />
                }
              >
                <div>Tempo médio</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-[700] text-3xl">
              {data?.averageTime}min
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                rightElement={
                  <Badge label={data?.isActive ? "Aberto" : "Fechado"} />
                }
              >
                <div>Status</div>
              </CardTitle>
              <CardDescription>Aceitando novos clientes</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div>
          {queueUserData ? (
            <div>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Você está na fila!</CardTitle>
                  <CardDescription>
                    Acompanhe sua posição e tempo estimado de espera
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[220px] flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center flex-col gap-2">
                    <div className="p-10 flex items-center justify-center text-5xl font-[600] text-white bg-gradient-to-r from-blue-800 to-purple-600 w-[110px] h-[110px] rounded-full">
                      {queueUserData?.position}
                    </div>
                    <div className="text-center text-2xl font-[700]">
                      Sua posição na fila
                    </div>
                    <div className="flex gap-1">
                      <div className="text-gray-600">Útima atualização há</div>
                      <div className="font-[600]">1 minuto</div>
                    </div>
                    <div className="mt-2">
                      <ClipLoader color="purple" size={12} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Info text="Você receberá uma notificação quando for sua vez. Mantenha esta página aberta ou salve o link nos favoritos." />
                  <Button
                    className="w-full text-red-500"
                    variant="outline"
                    onClick={() => leaveQueue.mutate(data?.queueId)}
                  >
                    Sair da fila
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <div>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Entrar na fila virtual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600 font-[500]">
                    Lembre-se, ao entrar na fila você deverá comparecer ao local
                    antes ou no momento em que for chamado. Caso não compareça,
                    sua vez poderá ser passada para o próximo da fila.
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Warning
                    text="Certifique-se de estar próximo ao estabelecimento. Você receberá uma
        notificação quando for sua vez de ser atendido."
                  />
                  <GradientButton
                    label="Entrar na fila"
                    isLoading={enterQueue.isPending}
                    onClick={() => enterQueue.mutate(data?.queueId)}
                  />
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
