import express from "express";
import { categoriesRouter } from "./routes/categories.routes";
import { specificationsRouter } from "./routes/specification.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/categories", categoriesRouter);
app.use("/specifications", specificationsRouter);

const port = 3333;

app.listen(port, () => {
  return console.log(`Server running at port ${port}`);
});
