import { Connection } from "../models";
import { IToken } from "../../utils/types";

export const findOne = (token: string, id: number) => {
  return new Promise<IToken[]>((resolve, reject) => {
    Connection.query(
      `SELECT * FROM accesstokens WHERE token = ? AND id = ? LIMIT 1`,
      [token, id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

export const insert = (userid: number) => {
  return new Promise<{ insertId: number }>((resolve, reject) => {
    Connection.query(
      `INSERT INTO accesstokens SET userid = ?`,
      userid,
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

export const update = (id: number, token: string) => {
  return new Promise<{ rowsAffected: number }>((resolve, reject) => {
    Connection.query(
      `UPDATE accesstokens SET token = ? WHERE id = ?`,
      [token, id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

export default {
  findOne,
  insert,
  update,
};
