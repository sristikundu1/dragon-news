import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/LeftAside/LeftAside";
import RightAside from "../components/RightAside/RightAside";

const HomeLayout = () => {
  return (
    <div className="bg-white">
      <header className="mb-10">
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>

      <main className="max-w-10/12 mx-auto grid grid-cols-12 gap-4">
        {/* left-navbar  */}
        <section className="col-span-3">
          <aside>
            <LeftAside></LeftAside>
          </aside>
        </section>

        {/* main section  */}
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>

        {/* right navbar  */}
        <section className="col-span-3">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
