import React from "react";
import "./styles.css";

import { Outlet, Link } from "react-router-dom";

const Navbar = ({ isLogged }) => {
  return (
    <>
      <nav className="text-2xl w-full rounded top-0 bg-teal-700 items-center z-10">
        <Link to={"/"} className="text-white p-4 logo-nav ">
          Git Explorer
        </Link>
        <div className="link-cont p-4 space-x-8">
          <Link className="text-white " to={"/"}>Repos</Link>
          <Link className="text-white "  to={"/users"}>Users</Link>
          <Link className="text-white "  to={"/searchUser"}>Search</Link>
          <Link className="text-white "  to={"/authProfile"}>Profile</Link>
          {!isLogged && <Link className="text-white "  to={"/login"}>Login</Link>}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
