import * as React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
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
    history.push("/sign_up")
  };

  const goAdd = () => {
    history.push("/add");
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
      <nav className="nav bg-success justify-content-between align-items-center p-3 mb-3 shadow">
        <h1 className="text-light">Striders</h1>
        <div className="d-flex">
          <NavLink
            exact
            to={to}
            className="nav-link bg-light text-dark rounded mx-2"
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
            className="btn nav-link btn-light text-dark mx-2"
            activeClassName="border-bottom"
          >
            Home
          </NavLink>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-options" className="btn nav-link btn-light text-dark">
              Options
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <span className="text-dark nav-link" onClick={goAdd}>
                  Add
                </span>
              </Dropdown.Item>
              <Dropdown.Item onClick={signout}>
                <span className="nav-link text-dark">Sign Out</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    );
  }
};

export interface NavBarProps {}

export default NavBar;
