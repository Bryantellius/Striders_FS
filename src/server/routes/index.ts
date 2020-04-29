import * as express from "express";
import * as morgan from "morgan";
import authRouter from "./auth";
import apiRouter from "./api";

const router = express.Router();

router.use(morgan("dev"));

router.use("/auth", authRouter);
router.use("/api", apiRouter);

export default router;
