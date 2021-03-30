import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/categories", categoriesRoutes);

const port = 3333;

app.listen(port, () => {
  return console.log(`Server running at port ${port}`);
});
