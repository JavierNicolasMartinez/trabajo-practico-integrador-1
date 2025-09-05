import express from "express";
import dotenv from "dotenv";
import { startDB } from "./src/config/database.js";
import routerUser from "./src/routes/user.routes.js";
// import routerProfile from "./src/routes/profile.routes.js";
import routerArticle from "./src/routes/article.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import routerAuth from "./src/routes/auth.routes.js";
import routerTag from "./src/routes/tag.routes.js";
import routerArticleTag from "./src/routes/article_tag.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api", routerUser);
app.use("/api", routerArticle);
app.use("/api", routerAuth);
app.use("/api", routerTag);
app.use("/api", routerArticleTag);

app.listen(PORT, async () => {
  await startDB();
  console.log("Servidor corriendo en el puerto: ", PORT);
});
