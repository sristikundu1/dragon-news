import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import RightAside from "../components/RightAside/RightAside";

const NewsDetailsLayout = () => {
  return (
    <div className="bg-white">
      <header className="mb-10">
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>

      <main className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pb-10">
        {/* details section  */}
        <section className="col-span-1 md:col-span-9 md:sticky top-0 h-fit">
          <Outlet></Outlet>
        </section>

        {/* right navbar  */}
        <section className="col-span-1 md:col-span-3">
          <aside className=" md:sticky  top-0  h-fit">
            <RightAside showAd={false}></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetailsLayout;
