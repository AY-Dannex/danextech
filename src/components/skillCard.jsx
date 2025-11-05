import React from "react";
import Show from "./animation";

const SkillCard = ({ icon, name, level }) => {
  return (
    <Show type="slideUp">
    <div className="theme bg-[#001516] text-white p-5 rounded-2xl flex flex-col shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 dark:bg-[#4]">
      <div className="text-4xl mb-2">
        <img src={icon} alt="" className="w-[50px]"/>
      </div>
      <h3 className="text-lg font-semibold mb-3">{name}</h3>

      <div className="w-full bg-[#000C0C] rounded-full h-3">
        <div
          className="bg-[#42c697] h-3 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-400 mt-2">{level}%</p>
    </div>
    </Show>
  );
};

export default SkillCard;
