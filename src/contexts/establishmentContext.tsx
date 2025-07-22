"use client";

import { CreateEstablishmentDto } from "@/dtos/CreateEstablishmentDto";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

type EstablishmentContextType = {
  isLoading: boolean;
  createEstablishment: (
    createEstablishmentDto: CreateEstablishmentDto
  ) => Promise<any>;
};

const EstablishmentContext = createContext<
  EstablishmentContextType | undefined
>(undefined);

export function EstablishmentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useRouter();

  const createEstablishment = async (
    createEstablishmentDto: CreateEstablishmentDto
  ) => {
    try {
      setIsLoading(true);
      const response = await api.post("/Establishment", createEstablishmentDto);
      navigate.push("/");
      return response.data;
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EstablishmentContext.Provider value={{ isLoading, createEstablishment }}>
      {children}
    </EstablishmentContext.Provider>
  );
}

export function useEstablishmentContext() {
  const context = useContext(EstablishmentContext);
  if (!context)
    throw new Error(
      "useEstablishmentContext must be used within EstablishmentContextProvider"
    );
  return context;
}
