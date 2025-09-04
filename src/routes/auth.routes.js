import express from "express";
import { createUserValidation } from "../middlewares/validations/auth.validation.js";
import { createProfileValidation } from "../middlewares/validations/profile.validation.js";
import { login, register } from "../controllers/auth.controller.js";
import { aplicarValidaciones } from "../middlewares/validator.js";


const authRoutes = express.Router();
authRoutes.post("/auth/register", createUserValidation, createProfileValidation, aplicarValidaciones, register );
authRoutes.post("/auth/login",login);

export default authRoutes;