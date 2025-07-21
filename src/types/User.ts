import { Address } from "./Address";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: Address;
};
