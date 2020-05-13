import * as express from "express";
import db from "../../db/models";

const router = express.Router();

const isLoggedIn: express.RequestHandler = (req: any, res, next) => {
  if (!req.user || req.user.role !== "guest") {
    console.log(`req.user.role: ${req.user.role}`);
    return res.sendStatus(401);
  } else {
    return next();
  }
};

router.get("/user_details/:id", isLoggedIn, async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let [user] = await db.Members.getUserDetails(id);
    res.json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/following/:id", isLoggedIn, async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let users = await db.Members.followedUsers(id);
    res.json(users);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/suggestedUsers/:id", isLoggedIn, async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let [users] = await db.Members.getSuggestedUsers(id);
    res.json(users);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/search/:id", isLoggedIn, async (req, res, next) => {
  try {
    let name = req.params.id;
    let users = await db.Members.searchResults(name);
    res.json(users);
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.post("/followUser", isLoggedIn, async (req, res, next) => {
  try {
    let body = req.body;
    let { insertId }: any = await db.Members.addUser(body);
    res.json({ insertId });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/unfollowUser", isLoggedIn, async (req, res, next) => {
  try {
    let body = req.body;
    let { affectedRows }: any = await db.Members.removeUser(body);
    res.json({ affectedRows });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default router;
