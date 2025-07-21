"use client";

import { GradientButton } from "@/components/GradientButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createEstablishmentSchema } from "@/schemas/establishmentSchema";
import { Formik } from "formik";

export default function RegisterEstablishment() {
  return (
    <div className="w-full items-center justify-center flex">
      <Card className="w-[45%]">
        <CardHeader>
          <div className="flex flex-col">
            <CardTitle className="text-2xl text-center w-full">
              Crie seu estabelecimento
            </CardTitle>
            <CardDescription className="text-[1rem] text-center text-gray-500 font-[500]">
              Comece hoje mesmo a fornecer uma experiência de fila inteligente
              para seus clientes
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <Formik
            validationSchema={createEstablishmentSchema}
            initialValues={{
              name: "",
              phone: "",
              establishmentType: "",
              zipCode: "",
              state: "",
              city: "",
              street: "",
              neighborhood: "",
              openHour: "",
              closeHour: "",
            }}
            onSubmit={() => {}}
          >
            <div className="flex gap-2">
              <Input label="Nome" placeholder="Nome do seu estabelecimento" />
              <Input
                label="Telefone"
                placeholder="Telefone do seu estabelecimento"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger label="Tipo de estabelecimento">
                  <SelectValue placeholder="Tipo do estabelecimento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurante">Restaurante</SelectItem>
                  <SelectItem value="bar">Bar</SelectItem>
                  <SelectItem value="cafe">Café</SelectItem>
                  <SelectItem value="padaria">Padaria</SelectItem>
                  <SelectItem value="lanchonete">Lanchonete</SelectItem>
                  <SelectItem value="pizzaria">Pizzaria</SelectItem>
                  <SelectItem value="farmacia">Farmácia</SelectItem>
                  <SelectItem value="laboratorio">Laboratório</SelectItem>
                  <SelectItem value="clinica">Clínica</SelectItem>
                  <SelectItem value="hospital">Hospital</SelectItem>
                  <SelectItem value="banco">Banco</SelectItem>
                  <SelectItem value="cartorio">Cartório</SelectItem>
                  <SelectItem value="mercado">Mercado</SelectItem>
                  <SelectItem value="lotérica">Lotérica</SelectItem>
                  <SelectItem value="petshop">Pet Shop</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <Input
                label="CEP"
                placeholder="Digite o CEP do seu estabelecimento"
              />
            </div>
            <div className="flex gap-2">
              <Input
                label="Estado"
                placeholder="Digite o estado do seu estabelecimento"
              />
              <Input
                label="Cidade"
                placeholder="Digite a cidade do seu estabelecimento"
              />
            </div>
            <div className="flex gap-2">
              <Input
                label="Rua"
                placeholder="Digite a rua do seu estabelecimento"
              />
              <Input
                label="Bairro"
                placeholder="Digite o bairro do seu estabelecimento"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger label="Horário de abertura">
                  <SelectValue placeholder="Selecione o horário de abertura" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }, (_, i) => {
                    const hour = 7 + Math.floor(i / 2);
                    const minute = i % 2 === 0 ? "00" : "30";
                    const value = `${hour
                      .toString()
                      .padStart(2, "0")}:${minute}`;
                    return (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    );
                  })}
                  <SelectItem value="24h">24 Horas</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger label="Horário de fechamento">
                  <SelectValue placeholder="Selecione o horário de fechamento" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }, (_, i) => {
                    const hour = 7 + Math.floor(i / 2);
                    const minute = i % 2 === 0 ? "00" : "30";
                    const value = `${hour
                      .toString()
                      .padStart(2, "0")}:${minute}`;
                    return (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    );
                  })}
                  <SelectItem value="24h">24 Horas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Formik>
        </CardContent>
        <CardFooter>
          <GradientButton
            onClick={() => {}}
            label="Cadastrar estabelecimento"
          />
        </CardFooter>
      </Card>
    </div>
  );
}
