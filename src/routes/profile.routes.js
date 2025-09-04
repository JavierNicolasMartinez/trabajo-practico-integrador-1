import express from "express";
import {
  profileCreate,
  profileDelete,
  profileId,
  profilesAll,
  profileUpdate,
} from "../controllers/profile.controllers.js";
import {
  createProfileValidation,
  deleteProfileValidation,
  getIdProfileValidation,
  updateProfileValidation,
} from "../middlewares/validations/profile.validation.js";
import { aplicarValidaciones } from "../middlewares/validator.js";

const routerProfile = express.Router();
routerProfile.post(
  "/profile",
  createProfileValidation,
  aplicarValidaciones,
  profileCreate
);

routerProfile.get("/profile", profilesAll);

routerProfile.get(
  "/profile/:id",
  getIdProfileValidation,
  aplicarValidaciones,
  profileId
);

routerProfile.put(
  "/profile/:id",
  updateProfileValidation,
  aplicarValidaciones,
  profileUpdate
);

routerProfile.delete(
  "/profile/:id",
  deleteProfileValidation,
  aplicarValidaciones,
  profileDelete
);

export default routerProfile;

