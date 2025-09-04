import { ArticleModel } from "../models/article.model.js";
import { TagModel } from "../models/tag.model.js";

export const createTag = async (req, res) => {
  const { name } = req.body;
  try {
    const tag = await TagModel.create({
      name,
    });
    res.status(201).json({ Message: "La etiqueta fue creada con exito" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

export const tagsAll = async (req, res) => {
  try {
    const etiquetas = await TagModel.findAll();
    if (etiquetas.length === 0) {
      return res
        .status(404)
        .json({ Message: "No hay ninguna etiqueta en la base de datos" });
    }
    return res.status(200).json(etiquetas);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const tagsId = async (req, res) => {
  try {
    const etiqueta = await TagModel.findByPk(req.params.id, {
      include: [
        {
          model: ArticleModel,
          attributes: { exclude: ["user_id"] },
          as: "articles",
          through: { attributes: [] },
        },
      ],
    });
    if (etiqueta) {
      return res.status(200).json(etiqueta);
    }
    return res.status(404).json({ Message: "La etiqueta no fue encontrada" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const deleteTag = async (req, res) => {
  try {
    const deleted = await TagModel.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 0)
      return res.status(404).json({ Message: "La etiqueta no fue encontrada" });
    res.status(200).json({ Message: "Etiqueta eliminada." });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

// Tags:
// ● POST /api/tags → Crear etiqueta (solo admin).
// ● GET /api/tags → Listar todas las etiquetas. (usuario autenticado)
// ● GET /api/tags/:id → Obtener etiqueta específica con artículos asociados(solo admin).
// ● PUT /api/tags/:id → Actualizar etiqueta (solo admin).
// ● DELETE /api/tags/:id → Eliminar etiqueta (solo admin).
