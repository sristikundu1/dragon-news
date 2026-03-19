import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="text-dark font-semibold mb-3">All Category</h2>

      <div className="flex flex-col gap-3 text-[rgba(159,159,159,1)] text-left ">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn border-0  font-medium"}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
