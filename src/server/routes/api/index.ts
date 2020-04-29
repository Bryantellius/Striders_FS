import * as express from "express";
import activityRouter from "./activities";
import * as passport from "passport";

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate("bearer", { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
})

router.use("/activities", activityRouter);

export default router;
