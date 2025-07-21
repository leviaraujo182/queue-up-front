import { establishmentTypes } from "@/constants/establishmentContants";
import * as yup from "yup";

export const createEstablishmentSchema = yup.object({
  name: yup.string().required("O campo de nome é obrigatório"),
  phone: yup.string().required("O campo de telefone é obrigatório"),
  establishmentType: yup
    .string()
    .required("O campo de tipo do estabelecimento é obrigatório"),
  zipCode: yup.string().required("O campo de CEP é obrigatório"),
  state: yup.string().required("O campo de estado é obrigatório"),
  city: yup.string().required("O campo de cidade é obrigatório"),
  street: yup.string().required("O campo de rua é obrigatório"),
  neighborhood: yup.string().required("O campo de bairro é obrigatório"),
  openHour: yup
    .string()
    .required("O campo de horário de abertura é obrigatório"),
  closeHour: yup
    .string()
    .required("O campo de horário de fechamento é obrigatório"),
});
