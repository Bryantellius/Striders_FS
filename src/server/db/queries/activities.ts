import { Connection } from "../models/index";
import { IActivity, IUser } from "../../utils/types";

// Returns all activities
export const all = async () => {
  return new Promise<(IActivity | IUser)[]>((resolve, reject) => {
    Connection.query(
      "SELECT a.id, u.firstname, u.lastname, a.type, a.duration, a.distance, a._created as date FROM activity a JOIN users u ON u.id = a.userid ORDER BY a._created DESC",
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Returns one activity based on activity id
export const one = async (id: number) => {
  return new Promise<(IActivity | IUser)[]>((resolve, reject) => {
    Connection.query(
      "SELECT a.id, u.firstname, u.lastname, a.type, a.duration, a.distance, a._created as date FROM activity a JOIN users u ON u.id = a.userid WHERE a.id = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Inserts one activity and returns id
export const add = async (activity: IActivity) => {
  return new Promise<{ insertId: number }>((resolve, reject) => {
    Connection.query("INSERT INTO activity SET ?", activity, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Updates one activity and returns number of rows affected in db
export const update = async (id: number, body: IActivity) => {
  return new Promise<{ affectedRows: number }>((resolve, reject) => {
    Connection.query(
      "UPDATE activity SET ? WHERE id = ?",
      [body, id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Deletes one activity and returns number of rows affected in db
export const remove = async (id: number) => {
  return new Promise<{ affectedRows: number }>((resolve, reject) => {
    Connection.query(
      "DELETE FROM activity WHERE id = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Returns activities associated with a userid
export const allByUser = async (id: number) => {
  return new Promise<(IActivity | IUser)[]>((resolve, reject) => {
    Connection.query(
      `SELECT a.id, u.firstname, u.lastname, a.type, a.duration, a.distance, a._created as date
    FROM activity a 
    JOIN users u ON u.id = a.userid
    WHERE u.id = 1`,
      [id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

export default {
  all,
  one,
  add,
  update,
  remove,
  allByUser,
};
