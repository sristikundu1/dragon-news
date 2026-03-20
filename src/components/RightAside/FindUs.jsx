import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h1 className="text-dark font-semibold my-8 text-xl mb-4">Find Us On</h1>

      <div className="flex flex-col border-[rgba(231,231,231,1)] border">
        {/* facebook  */}
        <Link to={"https://www.facebook.com/"}>
          <button className="btn justify-start text-[#706F6F] border-b border-[rgba(231,231,231,1)] py-9 gap-2 w-full flex items-center">
            <div className="p-2 bg-gray-300 rounded-full">
              <FaFacebookF className="text-[#4561a1]" />
            </div>
            Facebook
          </button>
        </Link>

        {/* Twitter */}
        <Link to={"https://x.com/"}>
          <button className="btn  text-[#706F6F] border-b-[rgba(231,231,231,1)] py-9 gap-2  w-full flex items-center justify-start">
            <div className="p-2 bg-gray-300 rounded-full">
              <FaTwitter className="text-[#58a7de]" />
            </div>
            Twitter
          </button>
        </Link>

        {/* Instagram */}
        <Link to={"https://www.instagram.com/?hl=en"}>
          <button className="btn  text-[#706F6F] border-b-[rgba(231,231,231,1)] py-9 gap-2  w-full flex items-center justify-start">
            <div className="p-2 bg-gray-300 rounded-full ">
              <FaInstagram className="text-[#dd2a7b]" />
            </div>
            Instagram
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
