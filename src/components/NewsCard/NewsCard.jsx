import { format } from "date-fns";
import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, author, title, thumbnail_url, rating, details, total_view } =
    news;
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        {/* author */}
        <div className="flex items-center justify-between bg-base-200 p-3">
          <div className="flex items-center gap-3">
            <img src={author.img} alt="" className="w-10 h-10 rounded-full" />

            <div>
              <h3 className="font-semibold text-dark text-sm md:text-lg">
                {author.name}
              </h3>
              <p className="text-sm text-accent font-normal">
                {format(new Date(author.published_date), "yyyy-MM-dd")}
              </p>
            </div>
          </div>

          <div className="flex gap-2 text-accent text-xl">
            <HiOutlineBookmark />
            <IoShareSocialOutline />
          </div>
        </div>

        {/* title */}
        <div className="p-4">
          <h2 className="font-bold text-lg md:text-xl leading-7 text-dark">
            {title}
          </h2>
        </div>

        {/* image */}
        <div className="px-4">
          <img
            src={thumbnail_url}
            alt="thumbnail"
            className="rounded-lg w-full"
          />
        </div>

        {/* details */}
        <div className="p-4 text-accent text-sm font-bold">
          {details.slice(0, 150)}...
          <Link to={`/news/${id}`}>
            <span className="text-secondary font-semibold cursor-pointer ml-1">
              Read More
            </span>
          </Link>
        </div>

        {/* footer */}
        <div className="flex items-center justify-between p-4 border-t border-[rgba(231,231,231,1)]">
          {/* rating */}

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating.number ? "text-orange-400" : "text-gray-300"
                }
              />
            ))}

            <span className="text-[rgba(112,111,111,1)] font-medium  ml-2">
              {rating.number}
            </span>
          </div>

          {/* views */}
          <div className="flex items-center font-medium gap-2 text-[rgba(112,111,111,1)]">
            <FaEye />
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
