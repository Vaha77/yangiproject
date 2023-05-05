import React from "react";
import { navbar } from "../../Utils/navbar";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {navbar.map(({ title, id, path, Element }) => {
        return (
          <NavLink key={id} to={path} Element={Element}>
            {title}
          </NavLink>
        );
      })}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
