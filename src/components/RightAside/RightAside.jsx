import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import FindUs from "./findUs";
import Qzone from "./Qzone";
import ad from "../../assets/bg.png";

const RightAside = ({ showAd = true }) => {
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

      <Qzone></Qzone>

      {showAd && (
        <div className="w-full mt-4">
          <img className="w-full" src={ad} alt="background-image" />
        </div>
      )}
    </div>
  );
};

export default RightAside;
