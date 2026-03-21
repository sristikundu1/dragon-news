import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="px-3 md:px-0 md:max-w-10/12 mx-auto">
      <div className="flex items-center gap-2 bg-base-200 p-3">
        <button className="btn bg-secondary text-white font-normal px-5">
          Latest
        </button>
        <Marquee
          className="text-dark font-semibold gap-3"
          pauseOnHover={true}
          speed={60}
        >
          <p>
            Breaking News: Government announces new economic policy. Tech
            Update: New AI model released today. Sports: Bangladesh wins
            thrilling last-over match
          </p>
          <p>
            Weather Alert: Heavy rain expected this weekend. Education: New
            university admission circular published. International: Global
            leaders meet for climate summit.
          </p>
          <p>
            Health: Doctors warn about seasonal flu increase. Business: Stock
            market shows strong growth today
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
