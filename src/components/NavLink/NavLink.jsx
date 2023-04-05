import React from "react";

const NavLink = () => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {" "}
      {children}
    </NavLink>
  );
};

export default NavLink;
