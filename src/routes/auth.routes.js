import express from "express";
import { createUserValidation } from "../middlewares/validations/auth.validation.js";
import {
  createProfileValidation,
  deleteProfileValidation,
  getIdProfileValidation,
  updateProfileValidation,
} from "../middlewares/validations/profile.validation.js";
import { login, logout, register } from "../controllers/auth.controller.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.js";
import { dataValida } from "../middlewares/match.js";
import {
  profileId,
  profileUpdate,
} from "../controllers/profile.controllers.js";

const authRoutes = express.Router();
authRoutes.post(
  "/auth/register",
  createUserValidation,
  createProfileValidation,
  aplicarValidaciones,
  dataValida,
  register
);
authRoutes.post("/auth/login", login);

authRoutes.post("/auth/logout", logout);

authRoutes.get(
  "/auth/profile",
  authMiddleware,
  getIdProfileValidation,
  aplicarValidaciones,
  profileId
);

authRoutes.put(
  "/auth/profile",
  authMiddleware,
  updateProfileValidation,
  aplicarValidaciones,
  dataValida,
  profileUpdate
);

export default authRoutes;
