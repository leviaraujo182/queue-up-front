"use client";

import { GradientButton } from "@/components/GradientButton";
import { LinkText } from "@/components/LinkText";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/contexts/authContext";
import { CreateUserDto } from "@/dtos/CreateUserDto";
import { registerSchema } from "@/schemas/authSchemas";
import { Formik } from "formik";
import { useRouter } from "next/navigation";

export default function Register() {
  const { createUser, isLoading } = useAuthContext();
  const router = useRouter();

  const handleCreateUser = (createUserDto: CreateUserDto) => {
    createUser(createUserDto);
  };

  return (
    <div className="flex items-start justify-center h-[90vh] mb-35">
      <Card className="w-[50%] flex flex-col justify-center">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-center w-full">
            Crie sua conta
          </CardTitle>
          <CardDescription className="text-[0.9rem] text-gray-500 font-[500]">
            Comece a gerenciar filas virtuais hoje mesmo
          </CardDescription>
        </CardHeader>
        <Formik
          validationSchema={registerSchema}
          onSubmit={(values) =>
            handleCreateUser({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              phone: values.phone,
              birthDate: values.birthDate,
              address: {
                city: values.city,
                state: values.state,
                street: values.street,
                zipCode: values.zipCode,
                neighborhood: values.neighborhood,
              },
              password: values.password,
            })
          }
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            birthDate: "",
            zipCode: "",
            city: "",
            state: "",
            street: "",
            neighborhood: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({ handleChange, errors, values, handleSubmit }) => (
            <>
              <CardContent className="flex flex-col gap-5">
                <div className="flex gap-3 flex-col">
                  <div className="flex w-full items-center justify-between gap-2">
                    <Input
                      disabled={isLoading}
                      value={values.firstName}
                      placeholder="Seu primeiro nome"
                      name="firstName"
                      label="Nome"
                      errorMessage={errors.firstName}
                      onChange={handleChange}
                    />
                    <Input
                      disabled={isLoading}
                      value={values.lastName}
                      placeholder="Seu último nome"
                      name="lastName"
                      label="Sobrenome"
                      errorMessage={errors.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <Input
                      disabled={isLoading}
                      label="E-mail"
                      placeholder="exemplo@exemplo.com"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      errorMessage={errors.email}
                    />
                    <Input
                      disabled={isLoading}
                      label="Telefone"
                      placeholder="(88) 99999-99999"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      errorMessage={errors.phone}
                    />
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <Input
                      disabled={isLoading}
                      label="Data de Nascimento"
                      placeholder="01/01/2000"
                      type="date"
                      name="birthDate"
                      value={values.birthDate}
                      onChange={handleChange}
                      errorMessage={errors.birthDate}
                    />
                    <Input
                      disabled={isLoading}
                      label="CEP"
                      placeholder="00000-00000"
                      name="zipCode"
                      value={values.zipCode}
                      onChange={handleChange}
                      errorMessage={errors.zipCode}
                    />
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <Input
                      disabled={isLoading}
                      label="Cidade"
                      placeholder="Ex: Fortaleza"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      errorMessage={errors.city}
                    />
                    <Input
                      disabled={isLoading}
                      label="Estado"
                      placeholder="Ex: CE"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      errorMessage={errors.state}
                    />
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <Input
                      disabled={isLoading}
                      label="Rua"
                      name="street"
                      placeholder="Ex: Rua das flores"
                      value={values.street}
                      onChange={handleChange}
                      errorMessage={errors.street}
                    />
                    <Input
                      disabled={isLoading}
                      label="Bairro"
                      name="neighborhood"
                      placeholder="Ex: Centro"
                      value={values.neighborhood}
                      onChange={handleChange}
                      errorMessage={errors.neighborhood}
                    />
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <Input
                      disabled={isLoading}
                      label="Senha"
                      placeholder="*********"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      errorMessage={errors.password}
                    />
                    <Input
                      disabled={isLoading}
                      label="Confirmar Senha"
                      placeholder="*********"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      errorMessage={errors.confirmPassword}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-5">
                <GradientButton
                  label="Criar conta"
                  isLoading={isLoading}
                  onClick={handleSubmit}
                />
                <div className="flex gap-1">
                  Já tem uma conta?
                  <LinkText
                    onClick={() => router.push("/login")}
                    label="Faça login"
                  />
                </div>
              </CardFooter>
            </>
          )}
        </Formik>
      </Card>
    </div>
  );
}
