import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { ArticleModel } from "./article.model.js";
import { TagModel } from "./tag.model.js";

export const ArticleTagModel = sequelize.define(
  "article_tag",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  }
);

//RELACIÓN MUCHOS A MUCHOS

ArticleModel.belongsToMany(TagModel, {
  through: ArticleTagModel,
  foreignKey: "tag_id",
  as: "tags",
  onDelete: "CASCADE",
});

TagModel.belongsToMany(ArticleModel, {
  through: ArticleTagModel,
  foreignKey: "article_id",
  as: "articles",
  onDelete: "CASCADE",
});

ArticleTagModel.belongsTo(TagModel, {
  foreignKey: "tag_id",
  as: "tags",
  onDelete: "CASCADE",
});

ArticleTagModel.belongsTo(ArticleModel, {
  foreignKey: "article_id",
  as: "articles",
  onDelete: "CASCADE",
});
