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


const routerUser = express.Router();

routerUser.get("/users/:id" ,getIdUserValidation, aplicarValidaciones, userId);
routerUser.get("/users", usersAll);
routerUser.put(
  "/users/:id",
  updateUserValidation,
  aplicarValidaciones,
  updateUser
);
routerUser.delete(
  "/users/:id",
  deleteUserValidation,
  aplicarValidaciones,
  deleteUser
);

export default routerUser;
