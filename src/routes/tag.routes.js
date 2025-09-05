import express from "express";
import {
  createTag,
  deleteTag,
  tagId,
  tagsAll,
  updateTag,
} from "../controllers/tag.controllers.js";
import {
  createTagValidation,
  deleteTagValidation,
  getIdTagValidation,
  updateTagValidation,
} from "../middlewares/validations/tag.validation.js";
import { authMiddleware } from "../middlewares/auth.js";
// import { ownerMiddleware } from "../middlewares/owner.js";
import { dataValida } from "../middlewares/match.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { adminMiddleware } from "../middlewares/admin.js";

const routerTag = express.Router();

routerTag.post(
  "/tags",
  authMiddleware,
  adminMiddleware,
  createTagValidation,
  aplicarValidaciones,
  createTag
);

routerTag.get("/tags", authMiddleware, tagsAll);

routerTag.get(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  getIdTagValidation,
  aplicarValidaciones,
  tagId
);

routerTag.put(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  updateTagValidation,
  aplicarValidaciones,
  dataValida,
  updateTag
);

routerTag.delete(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  deleteTagValidation,
  aplicarValidaciones,
  deleteTag
);

export default routerTag;
