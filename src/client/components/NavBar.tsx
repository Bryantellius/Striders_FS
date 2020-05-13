import * as React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { User, RemoveAccessToken } from "../utils/apiService";

const NavBar: React.FC<NavBarProps> = () => {
  const history = useHistory();
  const location = useLocation();

  const [state, setState] = React.useState<string>("");
  const [to, setTo] = React.useState<string>("");
  const [searchItem, setSearchItem] = React.useState<string>("");

  const signout = () => {
    localStorage.clear();
    RemoveAccessToken();
    history.push("/sign_up");
  };

  const searchUser = () => {
    history.push(`/search/${searchItem}`)
  };

  React.useEffect(() => {
    (async () => {
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
        <div className="d-flex justify-content-center align-items-center">
          <NavLink to="/" className="logo text-success nav-link">
            Striders
          </NavLink>
          <div className="input-group mx-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search User"
              value={searchItem}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchItem(e.target.value)}
            />
            <div
              className="input-group-append p-2 text-center"
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
                className="feather feather-search text-success"
                onClick={searchUser}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
        <div className="d-flex mr-2">
          <NavLink to="/add" className="nav-link">
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
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </NavLink>
          <div className="text-center p-2" onClick={signout}>
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
              className="feather feather-log-out text-success"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
        </div>
      </nav>
    );
  }
};

export interface NavBarProps {}

export default NavBar;
