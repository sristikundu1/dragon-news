import React from "react";
import LeftAside from "../../components/LeftAside/LeftAside";
import CategoryNews from "../CategoryNews/CategoryNews";
import RightAside from "../../components/RightAside/RightAside";

const Home = () => {
  return (
    <div>
      <h2 className="text-dark font-semibold">Dragon News Home</h2>
      {/* <div className="max-w-10/12 mx-auto grid grid-cols-12 gap-4">
        <section className="col-span-3">
          <aside>
            <LeftAside></LeftAside>
          </aside>
        </section>
        <section className="col-span-6">
          <CategoryNews></CategoryNews>
        </section>

        <section className="col-span-3">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </div> */}
    </div>
  );
};

export default Home;
