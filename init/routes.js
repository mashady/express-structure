import express from "express";
import home from "../routes/home.js";
import users from "../routes/users.js";
import clg from "../middlewares/clg.js";
export default function (app) {
  app.use(express.json());
  app.use(clg);
  app.use("/", home);
  app.use("/users", users);
}
