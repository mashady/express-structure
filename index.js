import express from "express";
import config from "config";
const app = express();
import routes from "./init/routes.js";
import cors from "./init/cors.js";

routes(app);
cors(app);

const local_port = config.get("sys_info.local_port");
app.listen(local_port, () => {
  console.log("Server is running on port", local_port);
});
