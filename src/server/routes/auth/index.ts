import * as express from 'express';
import loginRouter from './login';

const router = express.Router();

router.use("/auth", loginRouter);

export default router;
