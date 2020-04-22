import * as express from 'express';
import blogRouter from './routes';

const router = express.Router();

router.use("/activities", blogRouter);

export default router;
