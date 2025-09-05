import express from "express";
import {
  deleteUserValidation,
  getIdUserValidation,
  updateUserValidation,
} from "../middlewares/validations/user.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";
import {
  deleteUser,
  updateUser,
  userId,
  usersAll,
} from "../controllers/user.controllers.js";
import { authMiddleware } from "../middlewares/auth.js";
import { adminMiddleware } from "../middlewares/admin.js";
import { dataValida } from "../middlewares/match.js";

const routerUser = express.Router();

routerUser.get(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  getIdUserValidation,
  aplicarValidaciones,
  userId
);
routerUser.get("/users", authMiddleware, adminMiddleware, usersAll);
routerUser.put(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  updateUserValidation,
  aplicarValidaciones,
  dataValida,
  updateUser
);
routerUser.delete(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  deleteUserValidation,
  aplicarValidaciones,
  deleteUser
);

export default routerUser;
