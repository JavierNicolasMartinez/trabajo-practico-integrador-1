import express from "express";
import {
  articleCreate,
  articleDelete,
  articleGetId,
  articleGetIdUser,
  articlesAll,
  articlesGetUser,
  articleUpdate,
} from "../controllers/article.controllers.js";
import {
  createArticleValidation,
  deleteArticleValidation,
  getIdArticleValidation,
  updateArticleValidation,
} from "../middlewares/validations/article.valition.js";
import { aplicarValidaciones } from "../middlewares/validator.js";

const routerArticle = express.Router();
routerArticle.post(
  "/articles",
  createArticleValidation,
  aplicarValidaciones,
  articleCreate
);
routerArticle.get("/articles", articlesAll);
routerArticle.get(
  "/articles/:id",
  getIdArticleValidation,
  aplicarValidaciones,
  articleGetId
);
routerArticle.get("/article/user", aplicarValidaciones, articlesGetUser);
routerArticle.get("/articles/user/:id", aplicarValidaciones, articleGetIdUser);
routerArticle.put(
  "/articles/:id",
  updateArticleValidation,
  aplicarValidaciones,
  articleUpdate
);
routerArticle.delete(
  "/articles/:id",
  deleteArticleValidation,
  aplicarValidaciones,
  articleDelete
);

export default routerArticle;
