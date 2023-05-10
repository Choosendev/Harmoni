import { ErrorMessage, Field } from "formik";
import Icon from "../Icons/Icon";

const InputNoOutline = ({ edit, label, name, value, setFieldTouched, disabled }) => {
  return (
    <div className="mt-4">
      {label && <label className="text-[14px] leading-[22.4px] text-grey-text">{label}</label>}
      <div className="flex gap-4 mt-1 items-center justify-center relative md:justify-start w-full md:w-auto">
        <Field
          type="text"
          name={name}
          disabled={disabled}
          value={value || ""}
          onKeyUp={() => setFieldTouched(name, true)}
          className={`focus:outline-none text-[16px] w-full  ${
            edit && "pl-[40px] ] border-[1.5px] border-grey-input rounded-[8px] placeholder:text-grey-input"
          } pr-[16px] py-[8px  text-grey-label`}
        />
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className="text-[12px] text-red-600 text-left flex gap-1 font-normal">
            <Icon id="danger-icon" width="16" height="13" />
            {msg}
          </div>
        )}
      />{" "}
    </div>
  );
};

export default InputNoOutline;
