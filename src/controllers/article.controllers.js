import { ArticleModel } from "../models/article.model.js";

export const articleCreate = async (req, res) => {
  const { title, content, excerpt, status, user_id } = req.body;
  try {
    const article = await ArticleModel.create({
      title,
      content,
      excerpt,
      status,
      user_id,
    });
    res.status(201).json({ Message: "El artículo fue creado con exito" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

export const articleUpdate = async (req, res) => {
  const { title, content, excerpt, status, user_id } = req.body;
  try {
    const [updated] = await ArticleModel.update(
      { title, content, excerpt, status, user_id },
      { where: { id: req.params.id } }
    );
    if (updated === 0) {
      return res.status(404).json({ Message: "El articulo no existe" });
    }
    res.status(200).json({ Message: "Se actualizo un articulo" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const articlesAll = async (req, res) => {
  try {
    const articles = await ArticleModel.findAll();

    if (articles.length === 0) {
      return res.status(404).json({ Message: "No hay ningun artículo" });
    }
    return res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const articleGetId = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id, {
      attributes: {
        exclude: ["user_id"],
      },
    });
    if (article) {
      return res.status(200).json(article);
    }
    return res.status(404).json({ Message: "El articulo no fue encontrado" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const articlesGetUser = async (req, res) => {};

export const articleGetIdUser = async (req, res) => {};

export const articleDelete = async (req, res) => {
  try {
    const deleted = await ArticleModel.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 0)
      return res.status(404).json({ Message: "Rl artículo no fue encontrado" });
    res.status(200).json({ Message: "Artículo eliminado." });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

// title:
// content:
// excerpt:
//  status:

// POST /api/articles → Crear artículo. (usuario autenticado)
// ● GET /api/articles → Listar artículos publicados. (usuario autenticado)
// ● GET /api/articles/:id → Obtener artículo por su id. (usuario autenticado)
// ● GET /api/articles/user → Listar artículos publicados del usuario logueado. (usuario
// autenticado)
// ● GET /api/articles/user/:id → Obtener artículo del usuario logueado por su id. (usuario
// autenticado)
// ● PUT /api/articles/:id → Actualizar artículo (solo autor o admin).
// ● DELETE /api/articles/:id → Eliminación lógica (solo autor o admin).
