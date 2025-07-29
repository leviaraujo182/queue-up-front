import { GradientButton } from "@/components/GradientButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoPersonOutline } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";

export default function Configuration() {
  return (
    <div>
      <div className="bg-white w-full p-5 border-b">
        <div className="font-bold text-3xl">Configurações</div>
        <div className="text-gray-700">Gerencie suas informações pessoais</div>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center p-10 overflow-y-auto h-[calc(100vh-170px)]">
        <Card className="max-w-[800px] w-[100%] mt-50">
          <CardHeader className="gap-0">
            <div className="flex items-center gap-3">
              <IoPersonOutline size={25} className="text-blue-600" />
              <div>
                <CardTitle className="text-3xl">Informações Pessoais</CardTitle>
                <CardDescription>Atualize seus dados pessoais</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex gap-5 flex-col">
            <div className="flex gap-5">
              <Input placeholder="Nome completo" label="Nome Completo" />
              <Input placeholder="Telefone" label="Telefone" />
            </div>
            <div className="flex gap-5">
              <Input placeholder="Seu e-mail" label="E-mail" />
            </div>
          </CardContent>
          <CardFooter>
            <GradientButton label="Salvar Alterações" />
          </CardFooter>
        </Card>
        <hr />
        <Card className="max-w-[800px] w-[100%]">
          <CardHeader className="gap-0">
            <div className="flex items-center gap-3">
              <TbLockPassword size={25} className="text-red-600" />
              <div>
                <CardTitle className="text-3xl">Segurança</CardTitle>
                <CardDescription>Altere sua senha de acesso</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex gap-5 flex-col">
            <div className="flex gap-5">
              <Input placeholder="Digite sua senha atual" label="Senha Atual" />
            </div>
            <div className="flex gap-5">
              <Input placeholder="Digite a nova senha" label="Nova Senha" />
              <Input
                placeholder="Confirme a nova senha"
                label="Confirme a Nova Senha"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" className="w-full p-6">
              Alterar Senha
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
