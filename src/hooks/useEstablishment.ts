import { CreateEstablishmentDto } from "@/dtos/CreateEstablishmentDto";
import { fetchWithAuth } from "@/services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useUserEstablishments() {
  return useQuery({
    queryKey: ["userEstablishments"],
    queryFn: async () => {
      const response = await fetchWithAuth(
        "/Establishment/GetEstablishmentsByOwner"
      );
      return await response.json();
    },
  });
}

export function useEstablishmentMetrics() {
  return useQuery({
    queryKey: ["establishmentMetrics"],
    queryFn: async () => {
      const response = await fetchWithAuth(
        "/Establishment/GetEstablishmentsMetrics",
        {
          method: "GET",
        }
      );

      return await response.json();
    },
  });
}

export function useEstablishmentById(id: string) {
  return useQuery({
    queryKey: ["establishmentById", id],
    queryFn: async () => {
      const response = await fetchWithAuth(`/Establishment/${id}`, {
        method: "GET",
      });

      return await response.json();
    },
    enabled: !!id,
  });
}

export function useCreateEstablishment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (createEstablishmentDto: CreateEstablishmentDto) => {
      const response = await fetchWithAuth("/Establishment", {
        method: "POST",
        body: JSON.stringify(createEstablishmentDto),
      });

      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userEstablishments"] });
    },
  });
}
