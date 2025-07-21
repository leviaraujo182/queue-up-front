import { createContext, useContext, useState } from "react";

type EstablishmentContextType = {
  isLoading: boolean;
};

const EstablishmentContext = createContext<
  EstablishmentContextType | undefined
>(undefined);

export function EstablishmentContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createEstablishment = async (establishmentData: any) => {};

  return (
    <EstablishmentContext.Provider value={{ isLoading }}>
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
