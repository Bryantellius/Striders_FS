import * as express from "express";
import db from "../../db/models";

const router = express.Router();

router.get("/user_details/:id", async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let [user] = await db.Members.getUserDetails(id);
    res.json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/following/:id", async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let users = await db.Members.followedUsers(id);
    res.json(users);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/suggestedUsers/:id", async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let [users] = await db.Members.getSuggestedUsers(id);
    res.json(users);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/followUser", async (req, res, next) => {
  try {
    let body = req.body;
    let { insertId }: any = await db.Members.addUser(body);
    res.json({ insertId });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/unfollowUser", async (req, res, next) => {
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
