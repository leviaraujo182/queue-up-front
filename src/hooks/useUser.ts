import { CreateUserDto } from "@/dtos/CreateUserDto";
import { fetchWithAuth } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export function useCreateUser() {
  return useMutation({
    mutationFn: async (createUserDto: CreateUserDto) => {
      await fetchWithAuth("/User/", {
        method: "POST",
        body: JSON.stringify(createUserDto),
      });
    },
  });
}
