import { ProfileModel } from "../models/profile.model.js";
import { UserModel } from "../models/user.model.js";

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

export const profileUpdate = async (req, res) => {
  const { first_name, last_name, biography, avatar_url, birth_date } = req.body;
  try {
    const [updated] = await ProfileModel.update(
      { first_name, last_name, biography, avatar_url, birth_date },
      { where: { id: req.params.id } }
    );
    if (updated === 0) {
      return res.status(404).json({ Message: "El perfil no existe" });
    }
    res.status(200).json({ Message: "Se actualizo un perfil" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const profileId = async (req, res) => {
  try {
    const perfil = await ProfileModel.findByPk(req.user.id, {
      attributes: { exclude: ["user_id"] },
      include: [
        {
          model: UserModel,
          attributes: { exclude: ["password"] },
          as: "user",
        },
      ],
    });
    if (perfil) {
      return res.status(200).json(perfil);
    }
    return res.status(404).json({ Message: "El perfil no fue encontrado" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export const profilesAll = async (req, res) => {
  try {
    const perfiles = await ProfileModel.findAll({
      attributes: {
        exclude: ["user_id"],
      },
      include: [
        {
          model: UserModel,
          attributes: { exclude: ["password"] },
          as: "user",
        },
      ],
    });
    if (perfiles.length === 0) {
      return res
        .status(404)
        .json({ Message: "No hay ningun perfil en la base de datos" });
    }
    return res.status(200).json(perfiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const profileDelete = async (req, res) => {
  try {
    const deleted = await ProfileModel.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 0)
      return res.status(404).json({ Message: "El perfil no fue encontrado" });
    res.status(200).json({ Message: "perfil eliminado." });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

// first_name
// last_name
// biography
// avatar_url
// birth_date
// Profile:
// ● first_name y last_name: 2-50 caracteres, solo letras.
// ● biography: máximo 500 caracteres.
// ● avatar_url: formato URL válido (opcional).
