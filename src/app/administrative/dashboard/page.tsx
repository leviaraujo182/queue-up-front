"use client";

import { CardInfo } from "@/components/CardInfo";
import { ClientQueueItem } from "@/components/ClientQueueItem";
import { GradientButton } from "@/components/GradientButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuWrench } from "react-icons/lu";
import { IoCopy } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetEstablishmentById,
  useGetEstablishmentDashboardMetrics,
  useGetUserEstablishments,
} from "@/hooks/useEstablishment";
import { use, useEffect, useState } from "react";
import { getEstablishmentNameByType } from "@/utils/getEstablishmentNameByType";
import { formatPhone } from "@/utils/formatPhone";
import {
  useCallNextInQueue,
  useGetQueueUsers,
  useRemoveFromQueue,
} from "@/hooks/useQueue";
import { AnimatePresence, motion } from "framer-motion";

export default function Dashboard() {
  const [selectedEstablishment, setSelectedEstablishment] = useState<
    string | null
  >(null);

  const { data: establishmentsListData = [] } = useGetUserEstablishments();
  const { data: metricsData, isLoading: isLoadingMetrics } =
    useGetEstablishmentDashboardMetrics(selectedEstablishment);
  const { data: establishmentData } = useGetEstablishmentById(
    selectedEstablishment
  );
  const { data: queueUsersData = [] } = useGetQueueUsers(
    establishmentData?.queueId
  );
  const removeFromQueue = useRemoveFromQueue();
  const callNextInQueue = useCallNextInQueue();

  const saveLocalEstablishmentId = (id: string) => {
    if (id) localStorage.setItem("selectedEstablishment", id);
  };

  const loadLocalEstablishmentId = () => {
    const id = localStorage.getItem("selectedEstablishment");
    if (id) setSelectedEstablishment(id);
  };

  useEffect(() => {
    loadLocalEstablishmentId();
  }, []);

  return (
    <div className="w-full">
      <div className="p-5 bg-white flex items-center justify-between border-b">
        <div>
          <div className="font-bold text-3xl">{establishmentData?.name}</div>
          <div>{getEstablishmentNameByType(establishmentData?.type)}</div>
        </div>
        <div className="flex gap-5">
          <Select
            value={selectedEstablishment || ""}
            onValueChange={(e) => {
              setSelectedEstablishment(e);
              saveLocalEstablishmentId(e);
            }}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selecione um estabelecimento" />
            </SelectTrigger>
            <SelectContent>
              {establishmentsListData.map((establishment) => (
                <SelectItem key={establishment.id} value={establishment.id}>
                  {establishment.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="p-5 gap-5 flex flex-col">
        {selectedEstablishment ? (
          <>
            <div className="flex gap-5">
              <CardInfo
                title="Clientes na fila"
                isLoading={isLoadingMetrics}
                icon={<FaPeopleGroup size={24} className="text-blue-600" />}
                content={
                  <div className="text-4xl font-bold">
                    {metricsData?.inQueueUsers}
                  </div>
                }
              />
              <CardInfo
                title="Tempo médio"
                isLoading={isLoadingMetrics}
                icon={<FaRegClock size={24} className="text-green-600" />}
                content={
                  <div className="text-4xl font-bold">
                    {metricsData?.averageTime} min
                  </div>
                }
              />
              <CardInfo
                isLoading={isLoadingMetrics}
                title="Atendimentos hoje"
                icon={<BsGraphUpArrow size={24} className="text-purple-600" />}
                content={
                  <div className="text-4xl font-bold">
                    {metricsData?.servicesToday}
                  </div>
                }
              />
              <CardInfo
                title="Status"
                isLoading={isLoadingMetrics}
                icon={<LuWrench size={24} className="text-yellow-600" />}
                content={
                  <div>
                    {metricsData?.isActive ? (
                      <Button className="w-full p-5 bg-red-600">Fechar</Button>
                    ) : (
                      <Button className="w-full p-5 bg-green-600">Abrir</Button>
                    )}
                  </div>
                }
              />
            </div>
            <div className="flex gap-5 h-[calc(100vh-400px)]">
              <Card className="flex-1">
                <CardHeader className="gap-0">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-2xl">Fila Atual</CardTitle>
                      <CardDescription>
                        Gerencie os clientes na fila
                      </CardDescription>
                    </div>
                    <div>
                      <GradientButton
                        label={"Chamar proximo"}
                        isLoading={callNextInQueue.isPending}
                        onClick={() =>
                          callNextInQueue.mutate(establishmentData.queueId)
                        }
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="overflow-y-auto flex flex-col gap-2">
                  <AnimatePresence>
                    {queueUsersData && queueUsersData.length > 0 ? (
                      queueUsersData.map((queueUser, index) => (
                        <motion.div
                          key={queueUser.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ClientQueueItem
                            isCurrent={queueUser.startDate != null}
                            queueUserData={queueUser}
                            onRemove={() =>
                              removeFromQueue.mutate({
                                userId: queueUser.user.id,
                                queueId: queueUser.queueId,
                              })
                            }
                          />
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-gray-500">
                        Nenhum cliente na fila no momento
                      </div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
              <div className="flex-1 flex flex-col gap-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Dados do estabelecimento
                    </CardTitle>
                    <CardContent className="p-0 flex justify-between">
                      <div>
                        <div className="text-gray-700">Endereço</div>
                        <div className="font-[600]">
                          {establishmentData?.establishmentAddress.street}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-700">Telefone</div>
                        <div className="font-[600]">
                          {formatPhone(establishmentData?.phone || "")}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-700">
                          Horário de funcionamento
                        </div>
                        <div className="font-[600]">
                          {establishmentData?.openHour} -{" "}
                          {establishmentData?.closeHour}
                        </div>
                      </div>
                    </CardContent>
                  </CardHeader>
                </Card>
                <Card className="gap-2">
                  <CardHeader className="gap-0">
                    <CardTitle className="text-2xl">Link da fila</CardTitle>
                    <CardDescription>
                      Compartilhe este link com os seus clientes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="bg-gray-200 rounded-md w-full p-2 flex justify-between items-center">
                      <div className="text-gray-800 font-[500]">
                        https://fila.exemplo.com
                      </div>
                      <IoCopy
                        size={24}
                        className="text-gray-500 cursor-pointer hover:text-gray-700 transition ease-in-out duration-200"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "https://fila.exemplo.com"
                          )
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <div className="h-[calc(100vh-210px)] flex items-center justify-center">
            <span className="text-[18px] text-gray-500">
              Selecione um estabelecimentos para visualizar as metricas
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
