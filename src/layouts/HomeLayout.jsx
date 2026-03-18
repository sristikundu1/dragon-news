import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        {/* left-navbar  */}
        <section></section>

        {/* main section  */}
        <section>
          <Outlet></Outlet>
        </section>

        {/* right navbar  */}
        <section></section>
      </main>
    </div>
  );
};

export default HomeLayout;
