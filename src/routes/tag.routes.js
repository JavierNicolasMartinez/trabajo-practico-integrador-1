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

const tagRouter = express.Router();

tagRouter.post(
  "/tags",
  authMiddleware,
  adminMiddleware,
  createTagValidation,
  aplicarValidaciones,
  createTag
);

tagRouter.get("/tags", authMiddleware, tagsAll);

tagRouter.get(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  getIdTagValidation,
  aplicarValidaciones,
  tagId
);

tagRouter.put(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  updateTagValidation,
  aplicarValidaciones,
  dataValida,
  updateTag
);

tagRouter.delete(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  deleteTagValidation,
  aplicarValidaciones,
  deleteTag
);

export default tagRouter;
