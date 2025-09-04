import express from "express";
import dotenv from "dotenv";
import { startDB } from "./src/config/database.js";
import routerUser from "./src/routes/user.routes.js";
// import routerProfile from "./src/routes/profile.routes.js";
import routerArticle from "./src/routes/article.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api", routerUser);
app.use("/api", routerArticle);
app.use("/api", authRoutes);
app.listen(PORT, async () => {
  await startDB();
  console.log("Servidor corriendo en el puerto: ", PORT);
});
