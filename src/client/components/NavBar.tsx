import * as React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC<NavBarProps> = () => {
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
};

export interface NavBarProps {}

export default NavBar;
