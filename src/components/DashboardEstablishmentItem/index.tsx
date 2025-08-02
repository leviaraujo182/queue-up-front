import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { GradientButton } from "../GradientButton";
import { Establishment } from "@/types/Establishment";
import { StatusBadge } from "../StatusBadge";

type EstablishmentItemProps = {
  establishment: Establishment;
};

export const DashboardEstablishmentItem = ({
  establishment,
}: EstablishmentItemProps) => {
  return (
    <Card className="min-w-[470px] max-h-[290px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{establishment.name}</CardTitle>
            <CardDescription>Barbearia</CardDescription>
          </div>
          <StatusBadge
            status={establishment.isActive ? "active" : "inactive"}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn size={20} className="text-gray-500" />
          {establishment.establishmentAddress.city},{" "}
          {establishment.establishmentAddress.state}
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock size={20} className="text-gray-500" />
          {establishment.openHour} - {establishment.closeHour}
        </div>
        <div>Descricao</div>
      </CardContent>
      <CardFooter>
        <GradientButton label="Gerenciar Fila" />
      </CardFooter>
    </Card>
  );
};
