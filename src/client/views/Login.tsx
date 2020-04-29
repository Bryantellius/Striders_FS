import * as React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { apiService, setAccessToken } from "../utils/apiService";

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const history = useHistory();

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let res = await apiService(`/auth/login`, "POST", { email, password });
      if (res) {
        console.log(`Result good. Setting token...`);
        setAccessToken(res.token, { userid: res.userid, role: res.role });
        history.replace("/");
      } else {
        //Checking login status
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <form className="form-group p-3 border rounded shadow">
            <h2 className="text-center p-2 mb-4 border-bottom border-success">
              Sign In
            </h2>
            <div className="my-3 w-50 mx-auto">
              <h4>Email:</h4>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="my-3 w-50 mx-auto">
              <h4>Password:</h4>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              className="btn btn-success btn-block w-25 mx-auto my-4"
              onClick={login}
            >
              Sign In
            </button>
            <NavLink to="/sign_up" className="text-info">
              <small>Don't have an account? Sign Up today!</small>
            </NavLink>
          </form>
        </div>
      </section>
    </main>
  );
};

export interface LoginProps {}

export default Login;
