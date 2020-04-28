import * as passport from "passport";
import * as BearerStrategy from "passport-http-bearer";

import db from "../db/models";
import { ValidToken } from "../utils/security/tokens";

passport.use(
  new BearerStrategy.Strategy(async (token, done) => {
    try {
      let payload = await ValidToken(token);
      let [user] = await db.Users.findOneById(payload.userid);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (e) {
      done(e);
    }
  })
);
