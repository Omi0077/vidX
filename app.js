import express from "express";
import dotenv from "dotenv"
dotenv.config()

// core modules
import path from "path";

// local modules
import rootDir from "./utils/rootDir.js";
import clientRouter from "./router/clientRouter.js";
import { configDotenv } from "dotenv";

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(clientRouter);

app.use(express.static(path.resolve(rootDir, "public")));

// 404 page
app.use((req, res, next) => {
  res.render("404");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
