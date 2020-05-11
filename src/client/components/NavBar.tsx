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
            className="mx-2 nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square text-success"
            >
              <rect x="0" y="0" width="24" height="24" rx="4" ry="4"></rect>
              <line x1="12" y1="6" x2="12" y2="18"></line>
              <line x1="6" y1="12" x2="18" y2="12"></line>
            </svg>
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
