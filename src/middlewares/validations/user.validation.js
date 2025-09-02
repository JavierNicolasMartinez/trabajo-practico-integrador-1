import { body, param } from "express-validator";
import { UserModel } from "../../models/user.model.js";

export const createUserValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("El campo de username no puede estar vacío")
    .isLength({ min: 3, max: 20 })
    .custom(async (value) => {
      const usernameUnico = await UserModel.findOne({
        where: { username: value },
      });
      if (usernameUnico) {
        throw new Error("El username ya existe");
      }
    }),
  body("email")
    .trim()
    .isEmail()
    .notEmpty()
    .withMessage("El campo de email no debe estar vacío")
    .custom(async (value) => {
      const emailUnico = await UserModel.findOne({
        where: { email: value },
      });
      if (emailUnico) {
        throw new Error("El email ya existe");
      }
    }),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("El campo de password no puede estar vacío")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe tener al menos una letra mayúscula")
    .matches(/[a-z]/)
    .withMessage("La contraseña debe tener al menos una letra minúscula")
    .matches(/[0-9]/)
    .withMessage("La contraseña debe tener al menos un número"),
  body("role")
    .trim()
    .notEmpty()
    .withMessage("El campo de role no puede estar vacío")
    .isIn(["user", "admin"])
    .withMessage("El role debe ser 'user' o 'admin'"),
];
