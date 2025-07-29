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
import { useEstablishmentContext } from "@/contexts/establishmentContext";
import { createEstablishmentSchema } from "@/schemas/establishmentSchema";
import { Formik } from "formik";

export default function RegisterEstablishment() {
  const { createEstablishment, isLoading } = useEstablishmentContext();

  return (
    <div className="w-full items-center justify-center flex mt-5">
      <Card className="w-[45%] mb-10">
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
          onSubmit={(values) => {
            createEstablishment({
              name: values.name,
              phone: values.phone,
              establishmentType: values.establishmentType,
              openHour: values.openHour,
              closeHour: values.closeHour,
              establishmentAddress: {
                zipCode: values.zipCode,
                state: values.state,
                city: values.city,
                street: values.street,
                neighborhood: values.neighborhood,
              },
            });
          }}
        >
          {({ handleSubmit, handleChange, values, errors, setFieldValue }) => (
            <>
              <CardContent className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Input
                    label="Nome"
                    value={values.name}
                    placeholder="Nome do seu estabelecimento"
                    errorMessage={errors.name}
                    onChange={handleChange}
                    name="name"
                  />
                  <Input
                    label="Telefone"
                    value={values.phone}
                    placeholder="Telefone do seu estabelecimento"
                    onChange={handleChange}
                    name="phone"
                    errorMessage={errors.phone}
                  />
                </div>
                <div className="flex gap-2">
                  <Select
                    name="establishmentType"
                    onValueChange={(e) => setFieldValue("establishmentType", e)}
                  >
                    <SelectTrigger
                      label="Tipo de estabelecimento"
                      errorMessage={errors.establishmentType}
                    >
                      <SelectValue placeholder="Tipo do estabelecimento" />
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
                  <Input
                    label="CEP"
                    value={values.zipCode}
                    onChange={handleChange}
                    name="zipCode"
                    errorMessage={errors.zipCode}
                    placeholder="Digite o CEP do seu estabelecimento"
                  />
                </div>
                <div className="flex gap-2">
                  <Input
                    label="Estado"
                    value={values.state}
                    onChange={handleChange}
                    name="state"
                    errorMessage={errors.state}
                    placeholder="Digite o estado do seu estabelecimento"
                  />
                  <Input
                    label="Cidade"
                    value={values.city}
                    onChange={handleChange}
                    name="city"
                    errorMessage={errors.city}
                    placeholder="Digite a cidade do seu estabelecimento"
                  />
                </div>
                <div className="flex gap-2">
                  <Input
                    label="Rua"
                    value={values.street}
                    onChange={handleChange}
                    name="street"
                    errorMessage={errors.street}
                    placeholder="Digite a rua do seu estabelecimento"
                  />
                  <Input
                    label="Bairro"
                    value={values.neighborhood}
                    onChange={handleChange}
                    name="neighborhood"
                    errorMessage={errors.neighborhood}
                    placeholder="Digite o bairro do seu estabelecimento"
                  />
                </div>
                <div className="flex gap-2">
                  <Select onValueChange={(e) => setFieldValue("openHour", e)}>
                    <SelectTrigger
                      label="Horário de abertura"
                      name="openHour"
                      errorMessage={errors.openHour}
                    >
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
                  <Select
                    onValueChange={(e) => setFieldValue("closeHour", e)}
                    name="closeHour"
                  >
                    <SelectTrigger
                      label="Horário de fechamento"
                      errorMessage={errors.closeHour}
                    >
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
              </CardContent>
              <CardFooter>
                <GradientButton
                  isLoading={isLoading}
                  onClick={() => handleSubmit()}
                  label="Cadastrar estabelecimento"
                />
              </CardFooter>
            </>
          )}
        </Formik>
      </Card>
    </div>
  );
}
