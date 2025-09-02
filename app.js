import express from "express";
import dotenv from "dotenv";

import { startDB } from "./src/config/database.js";
// import { UserModel } from "./src/models/user.model.js";
// import { ProfileModel } from "./src/models/profile.model.js";
// import { TagModel } from "./src/models/tag.model.js";
// import { ArticleModel } from "./src/models/article.model.js";
// import { ArticleTagModel } from "./src/models/articleTag.model.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());


app.listen(PORT, async () => {
  await startDB();
  console.log("Servidor corriendo en el puerto: ", PORT);
});