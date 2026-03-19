import React, { Suspense } from "react";
import Categories from "../Categories/Categories";

const LeftAside = () => {
  return (
    <div>
      <h2 className="text-dark font-semibold mb-3">All Category</h2>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
