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
        setAccessToken(res.token, { userid: res.userid, role: res.role });
        history.replace("/");
      } else {
        document.getElementById("errorAlert").style.display = "block";
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-sm-6">
          <div id="errorAlert" className="alert alert-danger">
            Email or Password is incorrect. Try again.
          </div>
          <form id="loginForm" className="form-group p-3 border rounded shadow">
            <h2 className="text-center p-2 mb-4 border-bottom border-success">
              Sign In
            </h2>
            <div className="my-3">
              <h4>Email:</h4>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="my-3">
              <h4>Password:</h4>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              className="btn btn-success btn-block w-50 mx-auto my-4"
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
