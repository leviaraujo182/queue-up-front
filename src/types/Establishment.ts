export type Establishment = {
  id: string;
  name: string;
  phone: string;
  establishmentType: number;
  openHour: string;
  closeHour: string;
  description: string;
  isActive: boolean;
  userId: string;
  establishmentAddress: {
    id: string;
    city: string;
    state: string;
    street: string;
    neighborhood: string;
    zipCode: string;
  };
};
