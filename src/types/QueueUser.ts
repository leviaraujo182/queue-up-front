import { User } from "./User";

export type QueueUser = {
  id: string;
  queueId: string;
  user: User;
  position: number;
  startDate?: Date | null;
  endDate?: Date | null;
  createdAt: string;
};
