import { EstablishmentItem } from "@/components/EstablishmentItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuFilter } from "react-icons/lu";

export default function EstablishmentList() {
  return (
    <div className="p-10">
      <Card className="w-full p-5 gap-2">
        <CardHeader className="gap-0">
          <div className="flex items-center gap-2">
            <LuFilter size={23} className="text-gray-500" />
            <CardTitle className="text-[1.4rem]">Filtros</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex gap-2 items-end ">
          <Input
            label="Nome do estabelecimento"
            placeholder="Digite o nome do estabelecimento"
          />
          <Select>
            <SelectTrigger label="Tipo do estabelecimento">
              <SelectValue placeholder="Selecione o tipo de estabelecimento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Restaurant">Restaurante</SelectItem>
              <SelectItem value="Bar">Bar</SelectItem>
              <SelectItem value="Cafe">Café</SelectItem>
              <SelectItem value="Bakery">Padaria</SelectItem>
              <SelectItem value="SnackBar">Lanchonete</SelectItem>
              <SelectItem value="Pizzeria">Pizzaria</SelectItem>
              <SelectItem value="Pharmacy">Farmácia</SelectItem>
              <SelectItem value="Laboratory">Laboratório</SelectItem>
              <SelectItem value="Clinic">Clínica</SelectItem>
              <SelectItem value="Hospital">Hospital</SelectItem>
              <SelectItem value="Bank">Banco</SelectItem>
              <SelectItem value="Notary">Cartório</SelectItem>
              <SelectItem value="Market">Mercado</SelectItem>
              <SelectItem value="Lottery">Lotérica</SelectItem>
              <SelectItem value="PetShop">Pet Shop</SelectItem>
              <SelectItem value="Other">Outro</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger label="Outros filtros">
              <SelectValue placeholder="Selecione outros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Avaliation">Melhor avaliação</SelectItem>
              <SelectItem value="Queue">Menor Fila</SelectItem>
              <SelectItem value="QueueTime">Menor Tempo</SelectItem>
              <SelectItem value="Alphabetical">Nome A-Z</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex h-full">
            <Button variant="outline" className="p-5">
              Limpar filtros
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 mt-10 w-full">
        <EstablishmentItem />
        <EstablishmentItem />
        <EstablishmentItem />
        <EstablishmentItem />
      </div>
    </div>
  );
}
