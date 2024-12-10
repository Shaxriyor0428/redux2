import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <nav className="h-16 flex gap-5 text-3xl justify-center items-center shadow-md">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
