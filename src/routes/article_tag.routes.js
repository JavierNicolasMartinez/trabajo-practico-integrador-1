import express from "express";

import {
  createArticleTag,
  deleteArticleTag,
} from "../controllers/article_tag.controllers.js";
import {
  createaArticleTagValidation,
  deleteArticleTagValidation,
} from "../middlewares/validations/article_tag.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.js";
import { ownerMiddleware } from "../middlewares/owner.js";

const routerArticleTag = express.Router();

routerArticleTag.post(
  "/articles-tags",
  authMiddleware,
  ownerMiddleware,
  createaArticleTagValidation,
  aplicarValidaciones,
  createArticleTag
);

routerArticleTag.delete(
  "/articles-tags/:articleTagId",
  authMiddleware,
  ownerMiddleware,
  deleteArticleTagValidation,
  aplicarValidaciones,
  deleteArticleTag
);

export default routerArticleTag;
