import * as express from "express";
import * as passport from "passport";

import db from "../../db/models";
import { CreateToken } from "../../utils/security/tokens";
import { hashPassword } from "../../utils/security/passwords";

const router = express.Router();

router.post("/", async (req: any, res, next) => {
  try {
    let user = req.body;
    user.password = hashPassword(req.body.password);
    let result: any = await db.Users.insert(user);
    let token = await CreateToken({ userid: result.insertId });
    res.json({
      token,
      role: "guest",
      userid: result.insertId,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

export default router;
