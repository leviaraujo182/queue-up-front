export type EnterQueueResponseDto = {
  id: string;
  queueid: string;
  userId: string;
  position: number;
  startDate: Date | null;
  endDate: Date | null;
  createdAt: Date;
};
