import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();

  const allCategory = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(allCategory);
    } else if (id == "1") {
      const selectedCategory = allCategory.filter(
        (category) => category.others.is_today_pick == true,
      );
      setCategoryNews(selectedCategory);
    } else {
      const selectedCategory = allCategory.filter(
        (category) => category.category_id == id,
      );
      setCategoryNews(selectedCategory);
    }
  }, [allCategory, id]);

  return (
    <div>
      <h2 className="text-dark font-semibold">Dragon News Home</h2>
      <h2>categorynews{categoryNews.length}</h2>
    </div>
  );
};

export default CategoryNews;
