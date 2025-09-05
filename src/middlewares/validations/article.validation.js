import { body, param } from "express-validator";
import { ArticleModel } from "../../models/article.model.js";
import { UserModel } from "../../models/user.model.js";


export const createArticleValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("El campo title es obligatorio")
    .isLength({ min: 3, max: 200 })
    .withMessage("Title no debe ser menor a 3 ni mayor a 200 caracteres."),
  body("content")
    .trim()
    .notEmpty()
    .withMessage("El campo de content debe ser completado")
    .isLength({ min: 50 })
    .withMessage("Content debe tener al menos 50 caracteres"),
  body("excerpt")
    .trim()
    .isLength({ max: 500 })
    .withMessage("Excerpt supera los 500 caracteres"),
  body("status")
    .trim()
    .isIn(["published", "archived"])
    .withMessage("Status debe ser 'published' o 'archived'"),
  body("user_id")
    .trim()
    .custom(async (id) => {
      try {
        const usuarioExistente = await UserModel.findByPk(id);
        if (!usuarioExistente) {
          return Promise.reject("El usuario no existe");
        }
        return true;
      } catch (error) {
        console.error("Ocurrio un error con la existencia del Usuario", error);
        return Promise.reject(
          "Ocurrio un error con la existencia del usuario",
          error
        );
      }
    }),
];

export const updateArticleValidation = [
  param("id")
    .isInt()
    .withMessage("El id del parametro debe ser un entero")
    .custom(async (id) => {
      try {
        const articleExistente = await ArticleModel.findByPk(id);
        if (!articleExistente) {
          return Promise.reject("El articulo no existe");
        }
        return true;
      } catch (error) {
        console.error("Ocurrio un error con la existencia del articulo", error);
        return Promise.reject(
          "Ocurrio un error con la existencia del articulo",
          error
        );
      }
    }),
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El campo title es obligatorio")
    .isLength({ min: 3, max: 200 })
    .withMessage("Title no debe ser menor a 3 ni mayor a 200 caracteres."),
  body("content")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El campo de content debe ser completado")
    .isLength({ min: 50 })
    .withMessage("Content debe tener al menos 50 caracteres"),
  body("excerpt")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Excerpt supera los 500 caracteres"),
  body("status")
    .optional()
    .trim()
    .isIn(["published", "archived"])
    .withMessage("Status debe ser 'published' o 'archived'"),
  body("user_id")
    .optional()
    .trim()
    .custom(async (id) => {
      try {
        const usuarioExistente = await UserModel.findByPk(id);
        if (!usuarioExistente) {
          return Promise.reject("El usuario no existe");
        }
        return true;
      } catch (error) {
        console.error("Ocurrio un error con la existencia del Usuario", error);
        return Promise.reject(
          "Ocurrio un error con la existencia del usuario",
          error
        );
      }
    }),
];

export const getIdArticleValidation = [
  param("id")
    .isInt()
    .withMessage("El id del parametro debe ser un entero")
    .custom(async (id) => {
      try {
        const articleExistente = await ArticleModel.findByPk(id);
        if (!articleExistente) {
          return Promise.reject("El articulo no existe");
        }
        return true;
      } catch (error) {
        console.error("Ocurrio un error con la existencia del articulo", error);
        return Promise.reject(
          "Ocurrio un error con la existencia del articulo",
          error
        );
      }
    }),
];

export const deleteArticleValidation = [
  param("id")
    .isInt()
    .withMessage("El id del parametro debe ser un entero")
    .custom(async (id) => {
      try {
        const articleExistente = await ArticleModel.findByPk(id);
        if (!articleExistente) {
          return Promise.reject("El articulo no existe");
        }
        return true;
      } catch (error) {
        console.error("Ocurrio un error con la existencia del articulo", error);
        return Promise.reject(
          "Ocurrio un error con la existencia del articulo",
          error
        );
      }
    }),
];

// title: 3-200 caracteres, obligatorio.
// ● content: mínimo 50 caracteres, obligatorio.
// ● excerpt: máximo 500 caracteres.
// ● status: solo valores permitidos ('published', 'archived').
// ● user_id: debe existir y coincidir con usuario autenticado (excepto admin).
