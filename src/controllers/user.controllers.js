import { UserModel } from "../models/user.model.js";
import { ProfileModel } from "../models/profile.model.js";

export const createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const user = await UserModel.create({
      username,
      email,
      password,
      role,
    });
    res.status(201).json({ Message: "User creado con exito." });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const [updated] = await UserModel.update(
      { username, email, password, role },
      { where: { id: req.params.id } }
    );
    if (updated === 0) {
      return res.status(404).json({ Message: "User no existe" });
    }
    res.status(200).json({ Message: "Se actualizo un usuario con éxito" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const usersAll = async (req, res) => {
  try {
    const usuarios = await UserModel.findAll({
      attributes: { exclude: ["password"] },
      include: [
        {
          model: ProfileModel,
          attributes: { exclude: ["id", "user_id"] },
          as: "profile",
        },
      ],
    });
    if (usuarios.length === 0) {
      return res
        .status(404)
        .json({ Message: "No hay usuarios en la base de datos" });
    }
    return res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const userId = async (req, res) => {
  try {
    const usuario = await UserModel.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: ProfileModel,
          attributes: { exclude: ["user_id", "id"] },
          as: "profile",
        },
      ],
    });
    if (usuario) {
      return res.status(200).json(usuario);
    }
    return res.status(404).json({ Message: "El usuario no fue encontrado" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await UserModel.destroy({ where: { id: req.params.id } });
    if (deleted === 0)
      return res.status(404).json({ Message: "El Usuario no fue encontrado" });
    res.status(200).json({ Message: "Usuario eliminado." });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};
