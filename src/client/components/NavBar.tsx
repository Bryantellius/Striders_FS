import * as React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { User, RemoveAccessToken } from "../utils/apiService";

const NavBar: React.FC<NavBarProps> = () => {
  const history = useHistory();
  const location = useLocation();

  const [state, setState] = React.useState<string>("");
  const [to, setTo] = React.useState<string>("");

  const signout = () => {
    localStorage.clear();
    RemoveAccessToken();
    console.log(User);
    history.push("/sign_up");
  };

  React.useEffect(() => {
    (async () => {
      console.log(location.pathname);
      if (location.pathname === "/login") {
        setState("Sign Up");
        setTo("/sign_up");
      } else {
        setState("Log In");
        setTo("/login");
      }
    })();
  }, [location.pathname]);

  if (!User || User.user === null || User.role !== "guest") {
    return (
      <nav className="nav justify-content-between align-items-center p-2 shadow-sm">
        <h1 className="logo text-success">Striders</h1>
        <div className="d-flex">
          <NavLink
            exact
            to={to}
            className="nav-link btn btn-outline-success btn-sm text-success rounded mx-2"
          >
            {state}
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="nav justify-content-between align-items-center shadow-sm">
        <NavLink to="/" className="logo text-success nav-link">
          Striders
        </NavLink>
        <div className="d-flex">
          <NavLink
            to="/add"
            className="btn nav-link btn-outline-success btn-sm text-success mx-2"
          >
            Add
          </NavLink>
          <button
            className="btn nav-link btn-outline-success btn-sm text-success mx-2"
            onClick={signout}
          >
            Sign Out
          </button>
        </div>
      </nav>
    );
  }
};

export interface NavBarProps {}

export default NavBar;
