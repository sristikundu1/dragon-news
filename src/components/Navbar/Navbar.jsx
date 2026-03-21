import React, { use } from "react";
import userIcon from "../../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../../Pages/Loading/Loading";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>; // or spinner
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.error("log-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center px-3 md:px-0 md:max-w-10/12 mx-auto py-3">
      <div></div>
      {/* links  */}
      <div className="flex items-center gap-3 text-accent text-lg">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      {/* button  */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <img
              className="w-10 h-10 rounded-full min-w-10 min-h-10 object-cover  shrink-0"
              src={user?.photoURL || userIcon}
              alt="user"
            />

            <button
              onClick={handleLogOut}
              className="btn bg-primary text-white px-8 py-2 font-semibold"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <img className="w-10 h-10" src={userIcon} alt="user" />
            <Link to={"/auth/login"}>
              <button className="btn bg-primary text-white px-8 py-2 font-semibold">
                Login
              </button>
            </Link>
          </>
        )}
        {/* <img className="w-10 h-10" src={user} alt="user" />
        <Link to={"/auth/login"}>
          <button className="btn bg-primary text-white px-8 py-2 font-semibold">
            Login
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
