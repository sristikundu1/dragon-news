import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-5 px-3 md:px-0">
      <img className="w-[471px]" src={logo} alt="logo" />
      <p className="text-accent">Journalism Without Fear or Favour </p>
      <p className="font-medium">{format(new Date(), "EEEE, MMMM d, y")}</p>
    </div>
  );
};

export default Header;
