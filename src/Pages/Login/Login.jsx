import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { loginUser } = use(AuthContext);

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photoUrl, email, password);
    loginUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate(`${location.state ? location.state : "/"}`);
        // setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;

        // alert(errorMessage);
        setError(errorCode);
      });
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center font-bold text-2xl text-[rgba(64,63,63,1)] pt-4  ">
          Login your account
        </h1>
        <div className="divider px-5"></div>
        <form onSubmit={handleLogin} className="card-body ">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label font-bold"> Email address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email address"
              required
            />

            {/* password  */}
            <label className="label font-bold mt-4">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              required
            />
            <div className=" font-semibold text-gray-600 mt-3">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn bg-primary text-white mt-4">
              Login
            </button>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <p className="text-center font-semibold text-gray-600 mt-4">
              Dont’t Have An Account ?
              <Link to={"/auth/register"}>
                <span className="text-secondary"> Register</span>
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
