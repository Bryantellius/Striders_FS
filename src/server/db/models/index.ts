import * as mysql from "mysql";
import config from "../../config";
import Activities from "../queries/activities";
import Users from "../queries/users";
import Tokens from "../queries/tokens";
import { IActivity } from "../../utils/types";

export const Connection = mysql.createConnection(config.mysql);

Connection.connect((err) => {
  if (err) console.log(err);
});

export const Query = (
  query: string,
  values?: Array<string | number | IActivity>
) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default { Activities, Users, Tokens };
