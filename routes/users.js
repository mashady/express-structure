import express from "express";
import path from "path";
const Router = express.Router();

Router.get("", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "users.html"));
});

export default Router;
