import * as yup from "yup";

export const RegistrationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz.")
    .required("Eposta alanı zorunludur."),
  password: yup
    .string()
    .typeError("Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin")
    .min(8, "Şifreniz 8 karakterden az olamaz")
    .max(32, "Şifreniz 32 karakterden fazla olamaz")
    .required("Şifre alanı zorunludur."),
});
