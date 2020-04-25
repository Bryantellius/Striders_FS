import * as express from "express";
import db from "../db/models";

const router = express.Router();

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

router.get("/byUser/:id", async (req, res, next) => {
  let id = Number(req.params.id);
  try {
    let activities = await db.Activities.allByUser(id);
    res.json(activities);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

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
