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
import { Badge } from "@/components/Badge";

export default function Dashboard() {
  return (
    <div className="w-full h-full ">
      <div className="p-5 bg-white flex items-center justify-between border-b">
        <div>
          <div className="font-bold text-3xl">Barbearia do João</div>
          <div>Barbearia</div>
        </div>
        <Badge label="Aberto" />
      </div>
      <div className="p-5 gap-5 flex flex-col">
        <div className="flex gap-5">
          <CardInfo
            title="Clientes na fila"
            icon={<FaPeopleGroup size={24} className="text-blue-600" />}
            content={<div className="text-4xl font-bold">3</div>}
          />
          <CardInfo
            title="Tempo médio"
            icon={<FaRegClock size={24} className="text-green-600" />}
            content={<div className="text-4xl font-bold">15 min</div>}
          />
          <CardInfo
            title="Atendimentos hoje"
            icon={<BsGraphUpArrow size={24} className="text-purple-600" />}
            content={<div className="text-4xl font-bold">23</div>}
          />
          <CardInfo
            title="Status"
            icon={<LuWrench size={24} className="text-yellow-600" />}
            content={<Button className="w-full p-5 bg-red-600">Fechar</Button>}
          />
        </div>
        <div className="flex gap-5 h-full">
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
                  <GradientButton label={"Chamar proximo"} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="overflow-y-auto h-[calc(100vh-500px)] flex flex-col gap-2">
              <ClientQueueItem />
              <ClientQueueItem />
              <ClientQueueItem />
              <ClientQueueItem />
            </CardContent>
          </Card>
          <div className="flex-1 flex flex-col gap-2">
            <Card className="">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Dados do estabelecimento
                </CardTitle>
                <CardContent className="p-0 flex flex-col gap-1">
                  <div>
                    <div className="text-gray-700">Endereço</div>
                    <div className="font-[600]">Avenida Tal</div>
                  </div>
                  <div>
                    <div className="text-gray-700">Telefone</div>
                    <div className="font-[600]">(88) 98109-2424</div>
                  </div>
                  <div>
                    <div className="text-gray-700">
                      Horário de funcionamento
                    </div>
                    <div className="font-[600]">07:00 - 18:00</div>
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
                      navigator.clipboard.writeText("https://fila.exemplo.com")
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
