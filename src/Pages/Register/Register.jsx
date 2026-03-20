import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photoUrl, email, password);
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            alert(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        alert(errorMessage);
      });
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl mb-6">
        <h1 className="text-center font-bold text-2xl text-[rgba(64,63,63,1)] pt-4  ">
          Register your account
        </h1>
        <div className="divider px-5"></div>

        <form onSubmit={handleRegister} className="card-body ">
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label font-bold"> Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
            />

            {/* email  */}
            <label className="label font-bold"> Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter your Photo URL"
            />

            {/* email  */}
            <label className="label font-bold"> Email address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email address"
            />

            {/* password */}
            <label className="label font-bold mt-4">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
            />

            <div className=" font-semibold text-gray-600 mt-3">
              <input type="checkbox" className="checkbox" />
              Accept Terms & Conditions
            </div>

            <button type="submit" className="btn bg-primary text-white mt-4">
              Register
            </button>

            <p className="text-center font-semibold text-gray-600 mt-4">
              Already Have An Account ?
              <Link to={"/auth/login"}>
                <span className="text-secondary"> Login</span>
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
