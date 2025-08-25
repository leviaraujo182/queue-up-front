import { EnterQueueResponseDto } from "@/dtos/EnterQueueResponseDto";
import { fetchWithAuth } from "@/services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { QueryClient } from "@tanstack/react-query";

export function useEnterQueue() {
  const queryClient = useQueryClient();
  return useMutation<EnterQueueResponseDto, unknown, string>({
    mutationFn: async (queueId: string) => {
      const response = await fetchWithAuth(`/Queue/${queueId}/EnterQueue`, {
        method: "POST",
      });

      startConnection(queueId, queryClient);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getQueueUser"] });
    },
  });
}

export function useGetQueueUser(queueId: string) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["getQueueUser", queueId],
    queryFn: async () => {
      const response = await fetchWithAuth(`/Queue/${queueId}/GetQueueUser`, {
        method: "GET",
      });

      if (response.status === 404) return null;

      startConnection(queueId, queryClient);
      return await response.json();
    },
    enabled: !!queueId,
  });
}

export function useLeaveQueue() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (queueId: string) => {
      const response = await fetchWithAuth(`/Queue/${queueId}/LeaveQueue`, {
        method: "POST",
      });

      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getQueueUser"] });
    },
  });
}

const startConnection = (queueId: string, queryClient: QueryClient) => {
  let connection = new HubConnectionBuilder()
    .withUrl(`${process.env.NEXT_PUBLIC_API_URL}/QueueHub`)
    .build();

  connection.start().then(() => {
    connection.invoke("JoinQueueGroup", queueId);
  });

  connection.on("UpdateQueuePositions", (queueId) => {
    queryClient.invalidateQueries({ queryKey: ["getQueueUser", queueId] });
  });
};
