"use client";

import { CreateEstablishmentDto } from "@/dtos/CreateEstablishmentDto";
import { EstablishmentMetricsDto } from "@/dtos/EstablishmentsMetricsDto";
import api from "@/services/api";
import { Establishment } from "@/types/Establishment";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

type EstablishmentContextType = {
  isLoading: boolean;
  createEstablishment: (
    createEstablishmentDto: CreateEstablishmentDto
  ) => Promise<any>;
  loadEstablishmentMetrics: () => Promise<any>;
  establishmentMetrics: EstablishmentMetricsDto | null;
  loadUserEstablishments: () => Promise<any>;
  userEstablishments?: Establishment[];
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
  const [establishmentMetrics, setEstablishmentMetrics] =
    useState<EstablishmentMetricsDto | null>(null);
  const [userEstablishments, setUserEstablishments] = useState<Establishment[]>(
    []
  );
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

  const loadUserEstablishments = async () => {
    try {
      setIsLoading(true);
      const response = await api.get<Establishment[]>(
        "/Establishment/GetEstablishmentsByOwner"
      );
      setUserEstablishments(response.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadEstablishmentMetrics = async () => {
    try {
      setIsLoading(true);
      const response = await api.get<EstablishmentMetricsDto>(
        "/Establishment/GetEstablishmentsMetrics"
      );
      console.log(response.data);
      setEstablishmentMetrics(response.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EstablishmentContext.Provider
      value={{
        isLoading,
        createEstablishment,
        loadEstablishmentMetrics,
        establishmentMetrics,
        loadUserEstablishments,
        userEstablishments,
      }}
    >
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
