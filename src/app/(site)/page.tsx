import { EstablishmentItem } from "@/components/EstablishmentItem";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="flex-1 flex items-center justify-center w-full flex-col gap-2">
        <div className="font-[700] text-5xl bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent w-fit inline-block">
          Filas Virtuais Inteligentes
        </div>
        <div className="text-2xl font-[400] w-[55%] text-center text-gray-500">
          Encontre estabelecimentos próximos, entre na fila virtual e acompanhe
          sua posição em tempo real. Sem mais espera desnecessária!
        </div>
        <div className="w-[25%]">
          <Input
            leftElement={<IoSearch size={20} className="text-gray-400" />}
            className="bg-white p-5"
            type="large"
            placeholder="Buscar estabelecimentos.."
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="font-[700] text-2xl text-center">
          Estabelecimentos Disponíveis
        </div>
        <div className="flex gap-5 w-full">
          <EstablishmentItem />
          <EstablishmentItem />
          <EstablishmentItem />
        </div>
      </div>
    </div>
  );
}
