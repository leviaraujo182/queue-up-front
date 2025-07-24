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

export const DashboardEstablishmentItem = () => {
  return (
    <Card className="max-w-[350px] max-h-[290px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Teste</CardTitle>
            <CardDescription>Barbearia</CardDescription>
          </div>
          <div className="p-1 pl-2 pr-2 text-center border border-gray-400 text-[0.8rem] rounded-lg font-[500]">
            Barbearia
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn size={20} className="text-gray-500" />
          Localizacao
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock size={20} className="text-gray-500" />
          07:00 - 22:00
        </div>
        <div>Descricao</div>
      </CardContent>
      <CardFooter>
        <GradientButton label="Gerenciar Fila" />
      </CardFooter>
    </Card>
  );
};
