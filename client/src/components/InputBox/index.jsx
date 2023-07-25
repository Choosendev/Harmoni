import { ErrorMessage, Field } from 'formik';
import Icon from '../Icons/Icon';

const InputBox = ({
  placeholder,
  iconId,
  iconId2,
  height,
  width,
  label,
  classname,
  label2,
  password,
  togglePassword,
  showPassword,
  name,
  value,
  setFieldTouched,
  handleSubmit,
  isValid,
}) => {
  return (
    <div className='mt-4'>
      {label && (
        <label className='text-[14px] leading-[22.4px] text-grey-label'>
          {label} <span className='text-red'>{label2}</span>
        </label>
      )}
      <div className='flex gap-4 mt-1 items-center justify-center relative md:justify-start w-full md:w-auto'>
        <Field
          type={`${password ? (showPassword ? 'text' : 'password') : 'text'}`}
          name={name}
          value={value || ''}
          onKeyUp={(e) => {
            setFieldTouched(name, true);
            e.key === 'Enter' && handleSubmit();
          }}
          placeholder={placeholder}
          className={`focus:outline-none text-[16px] w-full md:w-[400px] ${
            classname && classname
          } ${
            iconId ? 'pl-[40px]' : 'pl-[16px]'
          } pr-[16px] py-[14px] border-[1.5px] ${
            isValid ? 'border-[#5C70AF]' : 'border-grey-input'
          } rounded-[8px] placeholder:text-grey-input text-grey-label`}
        />
        {password && (
          <i
            onClick={togglePassword}
            className={`text-grey-input absolute right-[15px] fa-solid fa-eye${
              showPassword ? '' : '-slash'
            }`}
          ></i>
        )}
        <div className={`${iconId ? 'block' : 'hidden'} absolute left-[15px]`}>
          {/* <Icon width={width} height={height} id={iconId} /> */}
        </div>
        <div
          className={`${iconId2 ? 'block' : 'hidden'} absolute right-[15px]`}
        >
          {/* <Icon width={width} height={height} id={iconId2} /> */}
        </div>
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className='text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal'>
            {/* <Icon id="danger-icon" width="16" height="13" /> */}
            {msg}
          </div>
        )}
      />{' '}
    </div>
  );
};

export default InputBox;
