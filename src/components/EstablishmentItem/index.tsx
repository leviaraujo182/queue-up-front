"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaRegStar, FaRegClock } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { GradientButton } from "../GradientButton";
import { useRouter } from "next/navigation";
import { Badge } from "../Badge";

export const EstablishmentItem = () => {
  const router = useRouter();

  return (
    <Card className="min-w-[350px]">
      <CardHeader>
        <CardTitle
          rightElement={<Badge label="Aberto" />}
          className="flex justify-between items-center"
        >
          <div>Barbearia Seu João</div>
        </CardTitle>
        <CardDescription>Av. Principal, 456</CardDescription>
      </CardHeader>
      <CardContent className="gap-2 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-[0.9rem] text-gray-600">Clínica Médica</div>
          <div className="text-[0.9rem] font-[600] flex items-center gap-1">
            <FaRegStar className="text-yellow-500" size={15} />
            4.9
          </div>
        </div>
        <div className="text-[0.9rem] text-gray-600 flex items-center gap-1">
          <FaRegClock />
          08:00 - 10:00
        </div>
        <div className="font-[700] text-[0.9rem] flex items-center gap-2">
          <GoPeople size={20} className="text-blue-600" /> 7 na fila
        </div>
      </CardContent>
      <CardFooter>
        <GradientButton
          label="Entrar na fila"
          onClick={() => router.push("/establishment")}
        />
      </CardFooter>
    </Card>
  );
};
