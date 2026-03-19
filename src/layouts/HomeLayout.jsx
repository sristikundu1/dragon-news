import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
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
