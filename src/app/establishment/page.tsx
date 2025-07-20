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
import { useState } from "react";
import { Info } from "@/components/Info";
import { Button } from "@/components/ui/button";

export default function Establishment() {
  const [isRegisteredOnQueue, setIsRegisteredOnQueue] = useState<boolean>(true);

  return (
    <div className="flex w-full items-center justify-center h-full ">
      <div className="w-[50%] flex flex-col gap-5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              rightElement={<Badge label="Aberto" />}
              className="flex items-center justify-between w-full"
            >
              <div className="text-2xl">Barbearia do João</div>
            </CardTitle>
            <CardDescription className="flex gap-4">
              <div className="text-gray-700 text-[1rem]">Barbearia</div>
              <div className="text-[1rem] flex items-center gap-1">
                <FaRegStar className="text-yellow-500" size={15} />
                <div className="text-gray-700">4.8</div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex flex-1 flex-col gap-2 text-gray-700">
              <div className="flex items-center gap-2">
                <IoLocationOutline size={18} className="text-gray-700" />
                Rua das Flores, 123
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={18} className="text-gray-700" />
                (11) 999999-00000
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock size={18} className="text-gray-700" />
                08:00 ás 18:00
              </div>
            </div>
            <div className="text-gray-700 flex-1">
              Barbearia tradicional com mais de 20 anos de experiência.
              Oferecemos cortes modernos e clássicos, barba e tratamentos.
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-around">
          <Card className="min-w-[310px]">
            <CardHeader>
              <CardTitle
                rightElement={
                  <IoMdPeople size={20} className="text-blue-500" />
                }
              >
                <div>Pessoas na fila</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-[700] text-3xl">3</CardContent>
          </Card>
          <Card className="min-w-[310px]">
            <CardHeader>
              <CardTitle
                rightElement={
                  <FaRegClock size={18} className="text-green-600" />
                }
              >
                <div>Tempo médio</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-[700] text-3xl">15 min</CardContent>
          </Card>
          <Card className="min-w-[310px]">
            <CardHeader>
              <CardTitle rightElement={<Badge label="Aberto" />}>
                <div>Status</div>
              </CardTitle>
              <CardDescription>Aceitando novos clientes</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div>
          {isRegisteredOnQueue ? (
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
                      8
                    </div>
                    <div className="text-center text-2xl font-[700]">
                      Sua posição na fila
                    </div>
                    <div className="flex gap-1">
                      <div className="text-gray-600">
                        Tempo estimado de espera:
                      </div>
                      <div className="font-[600]">45 minutos</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Info text="Você receberá uma notificação quando for sua vez. Mantenha esta página aberta ou salve o link nos favoritos." />
                  <Button className="w-full text-red-500" variant="outline">
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
                  <CardDescription>
                    Preencha seus dados para entrar na fila virtual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input label="Nome completo" placeholder="Seu nome" />
                    <Input label="Telefone" placeholder="(11) 999999-99999" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Warning
                    text="Certifique-se de estar próximo ao estabelecimento. Você receberá uma
        notificação quando for sua vez de ser atendido."
                  />
                  <GradientButton label="Entrar na fila" />
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
