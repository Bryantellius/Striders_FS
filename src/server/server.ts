import * as express from "express";
import apiRouter from "./routes";
import config from "./config";
import * as path from "path";
import * as morgan from "morgan";
import type { Error } from "../utils/types";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", apiRouter);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500);
    res.json({ errors: { err: err.message } });
  }
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

app.listen(config.port, () =>
  console.log(`Server listening on port: ${config.port}`)
);
