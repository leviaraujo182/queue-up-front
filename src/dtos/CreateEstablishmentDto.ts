import { AddressDto } from "./AddressDto";

export type CreateEstablishmentDto = {
  name: string;
  phone: string;
  establishmentType: string;
  openHour: string;
  closeHour: string;
  establishmentAddress: AddressDto;
};
