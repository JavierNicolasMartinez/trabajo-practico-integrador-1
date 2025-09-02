import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";

export const ArticleModel = sequelize.define(
  "article",
  {
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    excerpt: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("published", "archived"),
      allowNull: false,
      defaultValue: "published",
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  }
);

ArticleModel.belongsTo(UserModel, { foreignKey: "user_id", as: "author" });
UserModel.hasMany(ArticleModel, { foreignKey: "user_id", as: "articles" });
