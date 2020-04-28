import { Connection } from "../models";
import { IUser } from "../../utils/types";

export const findOneById = (id: number) => {
  return new Promise<IUser[]>((resolve, reject) => {
    Connection.query(
      `SELECT * FROM users WHERE id = ? LIMIT 1`,
      id,
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

export const findOneByEmail = (email: string) => {
  return new Promise<IUser[]>((resolve, reject) => {
    Connection.query(
      `SELECT * FROM users WHERE email = ? LIMIT 1`,
      email,
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

export const insert = (user: IUser) => {
  return new Promise<{ insertId: number }>((resolve, reject) => {
    Connection.query(`INSERT INTO users SET ?`, [user], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default {
  findOneById,
  findOneByEmail,
  insert,
};
