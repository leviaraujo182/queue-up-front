import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("É necessário informar um e-mail para prosseguir"),
  password: yup
    .string()
    .required("É necessário informar uma senha para prosseguir"),
});

export const registerSchema = yup.object({
  firstName: yup.string().required("O campo de primeiro nome é obrigatório"),
  lastName: yup.string().required("O campo de Sobrenome é obrigatório"),
  email: yup.string().email().required("O campo de email é obrigatório"),
  phone: yup.string().required("O campo de telefone é obrigatório"),
  accountType: yup.string().required("O tipo de usuário é obrigatório"),
  birthDate: yup
    .string()
    .required("O campo de data de nascimento é obrigatório"),
  zipCode: yup.string().required("O campo de CEP é obrigatório"),
  city: yup.string().required("O campo de cidade é obrigatório"),
  state: yup.string().required("O campo de estado é obrigatório"),
  street: yup.string().required("O campo de rua é obrigatório"),
  neighborhood: yup.string().required("O campo de bairro é obrigatório"),
  password: yup.string().required("O campo de senha é obrigatório"),
  confirmPassword: yup
    .string()
    .required("O campo de confirmação de senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
