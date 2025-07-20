import { AddressDto } from "./AddressDto";

export type CreateUserDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  birthDate: string;
  address: AddressDto;
};
