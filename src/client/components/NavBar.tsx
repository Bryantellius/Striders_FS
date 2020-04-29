import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { User } from "../utils/apiService";

const NavBar: React.FC<NavBarProps> = () => {
  const location = useLocation();

  const [state, setState] = React.useState<string>("");
  const [to, setTo] = React.useState<string>("");

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
      <nav className="nav bg-success justify-content-between align-items-center p-3 mb-3 shadow">
        <h1 className="text-light">Striders</h1>
        <div className="d-flex">
          <NavLink
            exact
            to={to}
            className="nav-link bg-light text-success rounded text-success mx-2"
          >
            {state}
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="nav bg-success justify-content-between align-items-center p-3 mb-3 shadow">
        <h1 className="text-light">Striders</h1>
        <div className="d-flex">
          <NavLink
            exact
            to="/"
            className="nav-link text-light mx-2"
            activeClassName="border-bottom"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/add"
            className="nav-link text-light mx-2"
            activeClassName="border-bottom"
          >
            Add
          </NavLink>
        </div>
      </nav>
    );
  }
};

export interface NavBarProps {}

export default NavBar;
