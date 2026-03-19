import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center font-bold text-2xl text-[rgba(64,63,63,1)] pt-4  ">
          Register your account
        </h1>
        <div className="divider px-5"></div>
        <div className="card-body ">
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label font-bold"> Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />

            {/* email  */}
            <label className="label font-bold"> Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Photo URL"
            />

            {/* email  */}
            <label className="label font-bold"> Email address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />

            {/* password */}
            <label className="label font-bold mt-4">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />

            <div className=" font-semibold text-gray-600 mt-3">
              <input type="checkbox" className="checkbox" />
              Accept Terms & Conditions
            </div>

            <button className="btn bg-primary text-white mt-4">Register</button>

            <p className="text-center font-semibold text-gray-600 mt-4">
              Already Have An Account ?
              <Link to={"/auth/login"}>
                <span className="text-secondary"> Login</span>
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
