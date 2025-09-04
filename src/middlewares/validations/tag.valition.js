import { body, param } from "express-validator";
import { TagModel } from "../../models/tag.model.js";

export const createTagValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("No puede estar vacío el nombre de la etiqueta")
    .custom(async (value) => {
      try {
        const tagUnica = await TagModel.findOne({ where: { name: value } });
        if (tagUnica) {
          return Promise.reject("Nombre ya existente");
        }
      } catch (error) {
        console.log("error ");
      }
    }),
];

export const updateTagValidation = [
  param("id")
    .isInt()
    .withMessage("El id del parametro debe ser un entero")
    .custom(async (id) => {
      try {
        const EtiquetaExistente = await TagModel.findByPk(id);
        if (!EtiquetaExistente) {
          return Promise.reject("La etiqueta no existe");
        }
        return true;
      } catch (error) {
        console.error(
          "Ocurrio un error con la existencia de la etiqueta",
          error
        );
        return Promise.reject(
          "Ocurrio un error con la existencia de la etiqueta",
          error
        );
      }
    }),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("No puede estar vacío el nombre de la etiqueta")
    .custom(async (value) => {
      try {
        const tagUnica = await TagModel.findOne({ where: { name: value } });
        if (tagUnica) {
          return Promise.reject("Nombre ya existente");
        }
      } catch (error) {
        console.log("error ");
      }
    }),
];

export const getIdTagValidation = [
  param("id")
    .isInt()
    .withMessage("El id del parametro debe ser un entero")
    .custom(async (id) => {
      try {
        const EtiquetaExistente = await TagModel.findByPk(id);
        if (!EtiquetaExistente) {
          return Promise.reject("La etiqueta no existe");
        }
        return true;
      } catch (error) {
        console.error(
          "Ocurrio un error con la existencia de la etiqueta",
          error
        );
        return Promise.reject(
          "Ocurrio un error con la existencia de la etiqueta",
          error
        );
      }
    }),
];

export const deleteTagValidation = [
  param("id")
    .isInt()
    .withMessage("El id del parametro debe ser un entero")
    .custom(async (id) => {
      try {
        const EtiquetaExistente = await TagModel.findByPk(id);
        if (!EtiquetaExistente) {
          return Promise.reject("La etiqueta no existe");
        }
        return true;
      } catch (error) {
        console.error(
          "Ocurrio un error con la existencia de la etiqueta",
          error
        );
        return Promise.reject(
          "Ocurrio un error con la existencia de la etiqueta",
          error
        );
      }
    }),
];

// Tags:
// ● POST /api/tags → Crear etiqueta (solo admin).
// ● GET /api/tags → Listar todas las etiquetas. (usuario autenticado)
// ● GET /api/tags/:id → Obtener etiqueta específica con artículos asociados(solo admin).
// ● PUT /api/tags/:id → Actualizar etiqueta (solo admin).
// ● DELETE /api/tags/:id → Eliminar etiqueta (solo admin).
