import { Query } from "../models/index";
import { IActivity } from "../../utils/types";

// Returns all activities
export const all = async () => {
  return Query(
    "SELECT a.id, a.userid, u.firstname, u.lastname, a.type, a.title, a.desciption, a.hrs, a.min, a.sec, a.distance, a._created as date FROM activity a JOIN users u ON u.id = a.userid ORDER BY a._created DESC"
  );
};

// Returns one activity based on activity id
export const one = async (id: number) => {
  return Query(
    "SELECT a.id, a.userid, u.firstname, u.lastname, a.type, a.title, a.desciption, a.hrs, a.min, a.sec, a.distance, a._created as date FROM activity a JOIN users u ON u.id = a.userid WHERE a.id = ?",
    [id]
  );
};

// Inserts one activity and returns id
export const add = async (activity: IActivity) => {
  return Query("INSERT INTO activity SET ?", [activity]);
};

// Updates one activity and returns number of rows affected in db
export const update = async (id: number, activity: IActivity) => {
  return Query("UPDATE activity SET ? WHERE id = ?", [activity, id]);
};

// Deletes one activity and returns number of rows affected in db
export const remove = async (id: number) => {
  return Query("DELETE FROM activity WHERE id = ?", [id]);
};

// Returns user activities
export const allByUser = async (id: number) => {
  return Query(`CALL spGetUser(?)`, [id]);
};

// Returns all activities from members that the user follows
export const followedActivities = async (id: number) => {
  return Query(`CALL spUserFollows(?)`, [id]);
};

export default {
  all,
  one,
  add,
  update,
  remove,
  allByUser,
  followedActivities,
};
