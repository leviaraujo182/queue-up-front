"use client";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { user } = useAuthContext();
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
      {user ? (
        <div className="flex items-center gap-3">
          <Button onClick={() => router.push("/registerEstablishment")}>
            Criar um estabelecimento
          </Button>
          <div className="cursor-pointer">
            <FaUserCircle size={35} />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
