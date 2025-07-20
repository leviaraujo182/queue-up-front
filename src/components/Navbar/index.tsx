"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="p-5 shadow-md flex justify-between bg-white">
      <div className="flex gap-2">
        <div className="p-5 bg-gradient-to-r from-blue-800 to-purple-600 rounded-md"></div>
        <div
          onClick={() => router.push("/")}
          className="font-[800] cursor-pointer text-3xl bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent w-fit inline-block"
        >
          QueueUp
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </Button>
        <Button onClick={() => router.push("/register")}>
          Criar uma conta
        </Button>
      </div>
    </div>
  );
}
