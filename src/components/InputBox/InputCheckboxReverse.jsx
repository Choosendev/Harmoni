import React from "react";
import { Field } from "formik";

const InputCheckboxReverse = ({ title, name, value }) => {
  return (
    <div className="flex items-center  gap-4 pb-5">
      <Field
        type={"checkbox"}
        name={name}
        value={value}
        className="grid place-content-center
              focus:outline-none border rounded-sm checked:border-0 border-grey-text-input transition-all ease-in duration-200 w-4 h-4 bg-white  appearance-none checked:bg-primary checked:bg-[url(../public/svgs/check.svg)] checked:bg-no-repeat checked:bg-center"
      />
      <label htmlFor={name} className="text-sm text-grey-light">
        {title}
      </label>
    </div>
  );
};

export default InputCheckboxReverse;
