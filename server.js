import express from "express";
import mongoose from "mongoose";
import { notFoundError, errorHundler } from "./middlewares/error-handler.js";
import morgan from "morgan";
import cors from "cors";
import restaurantRoutes from "./routes/restaurant.js";
import menuRoutes from "./routes/menu.js";
import platRoutes from "./routes/plat.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT;
const databaseName = "test2cinfo4";
console.log("eeeeeee", process.env.PORT);
mongoose
  .connect(`${process.env.DB_URL}/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(morgan(process.env.NODE_ENV));
app.use(express.json());
app.use("/restaurants", restaurantRoutes);
app.use("/menus", menuRoutes);
app.use("/plats", platRoutes);

app.use(notFoundError);
app.use(errorHundler);
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
