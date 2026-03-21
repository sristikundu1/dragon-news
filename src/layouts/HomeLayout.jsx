import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/LeftAside/LeftAside";
import RightAside from "../components/RightAside/RightAside";
import Loading from "../Pages/Loading/Loading";

const HomeLayout = () => {
  const { state } = useNavigate();
  return (
    <div className="bg-white">
      <header className="mb-10">
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>

      <main className="px-3 md:px-0 md:max-w-10/12 mx-auto grid grid-cols-3 md:grid-cols-12 gap-4">
        {/* left-navbar  */}
        <section className="col-span-1 md:col-span-3">
          <aside className="sticky  top-0  h-fit">
            <LeftAside></LeftAside>
          </aside>
        </section>

        {/* main section  */}
        <section className="col-span-2 md:col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>

        {/* right navbar  */}
        <section className="col-span-3">
          <aside className=" sticky  top-0  h-fit">
            <RightAside showAd={true}></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
