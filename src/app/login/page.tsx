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
import { loginSchema } from "@/schemas/authSchemas";
import { Formik } from "formik";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login, isLoading } = useAuthContext();
  const router = useRouter();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Formik
        onSubmit={(values) =>
          login({ email: values.email, password: values.password })
        }
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <Card className="w-[30%]">
            <CardHeader>
              <div className="flex items-center flex-col gap-1">
                <CardTitle className="text-2xl text-center w-full">
                  Entrar na sua conta
                </CardTitle>
                <CardDescription className="text-[0.9rem] text-gray-500 font-[500]">
                  Gerencia suas filas de forma inteligente
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Input
                value={values.email}
                name="email"
                label="Email"
                onChange={handleChange}
                errorMessage={errors.email}
                placeholder="seu@email.com"
              />
              <Input
                value={values.password}
                name="password"
                label="Senha"
                errorMessage={errors.password}
                onChange={handleChange}
                placeholder="*********"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-5">
              <GradientButton
                label="Entrar"
                isLoading={isLoading}
                onClick={handleSubmit}
              />
              <div className="flex gap-1">
                Não tem uma conta?{" "}
                <LinkText
                  onClick={() => router.push("/register")}
                  label="Cadastre seu estabelecimento"
                />
              </div>
            </CardFooter>
          </Card>
        )}
      </Formik>
    </div>
  );
}
