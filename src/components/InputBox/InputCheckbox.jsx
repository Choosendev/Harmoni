import { Field } from "formik";
import React from "react";

const InputCheckbox = ({ title, name, value }) => {
  return (
    <div className="flex items-center justify-between gap-3 w-[35%] pb-5">
      <label htmlFor={name} className="text-sm text-grey-light">
        {title}
      </label>
      <Field
        type={"checkbox"}
        name={name}
        value={value}
        className="grid place-content-center
                  focus:outline-none border rounded-sm checked:border-0 border-grey-text-input transition-all ease-in duration-200 w-4 h-4 bg-white  appearance-none checked:bg-primary checked:bg-[url(../public/svgs/check.svg)] checked:bg-no-repeat checked:bg-center"
      />
    </div>
  );
};

export default InputCheckbox;
