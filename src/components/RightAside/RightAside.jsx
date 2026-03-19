import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import FindUs from "./findUs";

const RightAside = () => {
  return (
    <div>
      <h2 className="text-dark font-semibold mb-3">Login With</h2>

      <div className="flex flex-col gap-2">
        {/* Google */}
        <button className="btn  text-blue-800 border-blue-800">
          <FcGoogle />
          Login with Google
        </button>

        {/* Github */}
        <button className="btn  text-black border-black">
          <FaGithub />
          Login with Github
        </button>
      </div>

      <FindUs></FindUs>
    </div>
  );
};

export default RightAside;
