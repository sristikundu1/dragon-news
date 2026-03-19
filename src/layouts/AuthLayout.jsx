import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="my-10">
        <Navbar></Navbar>
      </header>
      <main className="max-w-10/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
