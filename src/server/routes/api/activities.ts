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

// Returns an array of all activities or one activity by id
router.get("/:id?", isLoggedIn, async (req, res, next) => {
  let id = Number(req.params.id);
  if (id) {
    try {
      let [activity] = await db.Activities.one(id);
      res.json(activity);
    } catch (e) {
      console.log(e);
      next(e);
    }
  } else {
    try {
      let activities = await db.Activities.all();
      res.json(activities);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
});

// Returns an array of activities associated with a userid
router.get("/byUser/:id", isLoggedIn, async (req, res, next) => {
  let id = Number(req.params.id);
  try {
    let activities = await db.Activities.allByUser(id);
    res.json(activities.reverse());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// Inserts activity
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    let activityDTO = req.body;
    let details = await db.Activities.add(activityDTO);
    res.json({ details, msg: "Activity inserted." });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// Updates activity by id
router.put("/:id", isLoggedIn, async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let activityDTO = req.body;
    let details = await db.Activities.update(id, activityDTO);
    res.json({ details, msg: "Activity updated." });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// Deletes activity by id
router.delete("/:id", isLoggedIn, async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let details = await db.Activities.remove(id);
    res.json({ details, msg: "Activity deleted." });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let [user] = await db.Activities.getUser(id);
    res.json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default router;
