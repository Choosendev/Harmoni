import React from "react";
import Icon from "../Icons";

const LargeInputBox = ({ label, iconId, placeholder }) => {
  return (
    <div className="bg-grey-600 text-grey-500 flex gap-4 rounded-xl items-center px-2 md:px-8 py-6">
      <Icon width={24} height={24} id={iconId} />
      <div className="flex flex-col gap-3">
        <h2 className="text-[14px] md:text-[16px]">{label}</h2>
        <input type="text" placeholder={placeholder} className="text-[#1B1B1B] outline-none text-[16px] md:text-[20px] bg-transparent" />
      </div>
    </div>
  );
};

export default LargeInputBox;
