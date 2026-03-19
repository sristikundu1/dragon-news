import React from "react";
import swimming from "../../assets/swimming.png";
import classroom from "../../assets/class.png";
import play from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-[rgba(243,243,243,1)] p-5 mt-4">
      <h2 className="text-dark font-semibold text-xl mb-4">Q-Zone</h2>

      <div className="flex flex-col gap-9">
        <img src={swimming} alt="imag1" />
        <img src={classroom} alt="imag2" />
        <img src={play} alt="imag3" />
      </div>
    </div>
  );
};

export default Qzone;
