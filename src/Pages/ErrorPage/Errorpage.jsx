import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router";
import errorAnimation from "../../assets/404 error.json";

const Errorpage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      {/* Lottie Animation Container */}
      <div className="w-full max-w-md mb-8">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      {/* Text Content */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved. Don't
        worry, it happens to the best of us!
      </p>

      {/* Homepage Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary "
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default Errorpage;
