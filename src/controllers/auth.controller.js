import { matchedData } from "express-validator";
import { ProfileModel } from "../models/profile.model.js";
import { UserModel } from "../models/user.model.js";
import { hashPassword } from "../helpers/bcrypt.helper.js";

export const register = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });
    const hashedPassword = await hashPassword(data.password);
    console.log("<<<<<<<<<<<");

    const user = await UserModel.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    });

    await ProfileModel.create({
      first_name: data.first_name,
      last_name: data.last_name,
      biography: data.biography,
      avatar_url: data.avatar_url,
      birth_date: data.birth_date,
      user_id: user.id,
    });

    return res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error al registrar usuario", error });
  }
};
// export const createUser = async (req, res) => {
//   const { username, email, password, role } = req.body;
//   try {
//     const user = await UserModel.create({
//       username,
//       email,
//       password,
//       role,
//     });
//     res.status(201).json({ Message: "User creado con exito." });
//   } catch (error) {
//     res.status(500).json({ Error: error.message });
//   }
// };

// export const profileCreate = async (req, res) => {
//   const { first_name, last_name, biography, avatar_url, birth_date } = req.body;
//   try {
//     const profile = await ProfileModel.create({
//       first_name,
//       last_name,
//       biography,
//       avatar_url,
//       birth_date,
//     });
//     res
//       .status(201)
//       .json({ Message: "El perfil del usuario fue creado con éxito" });
//   } catch (error) {
//     res.status(500).json({ Error: error.message });
//   }
// };
