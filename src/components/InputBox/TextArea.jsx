import { ErrorMessage, Field } from "formik";
import Icon from "../Icons/Icon";

const TextArea = ({ placeholder, iconId, label, classname, label2, name, value, setFieldTouched, handleSubmit, isValid }) => {
  return (
    <div className="mt-4">
      {label && (
        <label className="text-[14px] leading-[22.4px] text-grey-label">
          {label} <span className="text-red">{label2}</span>
        </label>
      )}
      <div className="flex gap-4 mt-1 items-center justify-center relative md:justify-start w-full md:w-auto">
        <Field
          as={"textarea"}
          rows={4}
          column={30}
          name={name}
          value={value || ""}
          onKeyUp={(e) => {
            setFieldTouched(name, true);
          }}
          placeholder={placeholder}
          className={`focus:outline-none resize-none text-[16px] w-full ${classname && classname} ${
            iconId ? "pl-[40px]" : "pl-[16px]"
          } pr-[16px] py-[14px] border-[1.5px] ${
            isValid ? "border-[#5C70AF]" : "border-grey-input"
          } rounded-[8px] placeholder:text-grey-input text-grey-label`}
        />
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className="text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal">
            <Icon id="danger-icon" width="16" height="13" />
            {msg}
          </div>
        )}
      />{" "}
    </div>
  );
};

export default TextArea;
