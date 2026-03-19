import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  // get the id of the news
  const { id } = useParams();
  //   load all news
  const allNews = useLoaderData();

  //   find the news according to id
  const singleNews = allNews.find((news) => news.id == id);

  const { title, thumbnail_url, details, category_id } = singleNews;
  return (
    <div>
      <h2 className="text-dark font-semibold mb-3">Dragon News</h2>
      <div className="border-[rgba(231,231,231,1)] rounded-lg border p-6 ">
        <img className="rounded-lg" src={thumbnail_url} alt="image" />
        <h1 className="font-bold text-2xl leading-10 text-dark my-2">
          {title}
        </h1>
        <p className="text-accent text-sm leading-6 ">{details}</p>

        <Link to={`/category/${category_id}`}>
          <button className="btn bg-secondary text-white font-normal px-5 mt-6">
            <FaLongArrowAltLeft className="text-lg" />
            All news in this category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
