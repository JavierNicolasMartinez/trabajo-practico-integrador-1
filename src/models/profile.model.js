import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";

export const ProfileModel = sequelize.define(
  "profile",
  {
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT(),
      allowNull: true,
    },
    avatar_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    birth_date: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  }
);

//Relación Uno a uno
ProfileModel.belongsTo(UserModel, { foreignKey: "user_id", as: "user" });
UserModel.hasOne(ProfileModel, { foreignKey: "user_id", as: "profile" });
