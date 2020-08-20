import { required, confirmed, length, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "Este campo es requerido"
});

extend("email", {
  ...email,
  message: "Ingrese un email válido"
});

extend("confirmed", {
  ...confirmed,
  message: "Las contraseñas no coinciden"
});

extend("length", {
  ...length,
  message: "This field must have 2 options"
});
