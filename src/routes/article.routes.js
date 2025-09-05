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
} from "../middlewares/validations/article.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.js";
import { ownerMiddleware } from "../middlewares/owner.js";
import { dataValida } from "../middlewares/match.js";

const routerArticle = express.Router();
routerArticle.post(
  "/articles",
  authMiddleware,
  createArticleValidation,
  aplicarValidaciones,
  dataValida,
  articleCreate
);
routerArticle.get("/articles", authMiddleware, articlesAll);
routerArticle.get(
  "/articles/:id",
  authMiddleware,
  getIdArticleValidation,
  aplicarValidaciones,
  articleGetId
);

routerArticle.get("/article/user", aplicarValidaciones, articlesGetUser);

routerArticle.get(
  "/articles/user/:id",
  authMiddleware,
  getIdArticleValidation,
  aplicarValidaciones,
  articleGetIdUser
);
routerArticle.put(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  updateArticleValidation,
  aplicarValidaciones,
  dataValida,
  articleUpdate
);
routerArticle.delete(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  deleteArticleValidation,
  aplicarValidaciones,
  articleDelete
);

export default routerArticle;
