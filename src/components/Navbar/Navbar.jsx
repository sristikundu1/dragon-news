import React from "react";
import user from "../../assets/user.png";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-10/12 mx-auto py-3">
      <div></div>
      {/* links  */}
      <div className="flex items-center gap-3 text-accent text-lg">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      {/* button  */}
      <div className="flex items-center gap-4">
        <img className="w-10 h-10" src={user} alt="user" />
        <Link to={"/auth/login"}>
          <button className="btn bg-primary text-white px-8 py-2 font-semibold">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
