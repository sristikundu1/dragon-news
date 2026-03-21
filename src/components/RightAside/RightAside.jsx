import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import FindUs from "./findUs";
import Qzone from "./Qzone";
import ad from "../../assets/bg.png";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const RightAside = ({ showAd = true }) => {
  const { googleSignIn } = use(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        result.user;
        toast.success("Successfully login with google account!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <h2 className="text-dark font-semibold mb-3">Login With</h2>

      <div className="flex flex-col gap-2">
        {/* Google */}

        <button
          onClick={handleGoogleSignIn}
          className="btn  text-blue-800 border-blue-800"
        >
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
