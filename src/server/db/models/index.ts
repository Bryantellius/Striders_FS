import * as mysql from "mysql";
import config from "../../config";
import Activities from "../queries/activities";
import Users from '../queries/users';
import Tokens from '../queries/tokens';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect((err) => {
  if (err) console.log(err);
});

export default { Activities, Users, Tokens };
