import * as express from "express";
import db from "../../db/models";

const router = express.Router();

const isLoggedIn: express.RequestHandler = (req: any, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.sendStatus(401);
  } else {
    return next();
  }
};

// Returns an array of all activities or one activity by id
router.get("/:id?", async (req, res, next) => {
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
router.get("/byUser/:id", async (req, res, next) => {
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
router.post("/", async (req, res, next) => {
  try {
    let activityDTO = req.body;
    let { insertId: activityId } = await db.Activities.add(activityDTO);
    res.json({ activityId, msg: "Activity inserted." });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// Updates activity by id
router.put("/:id", async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let activityDTO = req.body;
    let { affectedRows } = await db.Activities.update(id, activityDTO);
    res.json({ affectedRows, msg: "Activity updated." });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// Deletes activity by id
router.delete("/:id", async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let { affectedRows } = await db.Activities.remove(id);
    res.json({ affectedRows, msg: "Activity deleted." });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

export default router;