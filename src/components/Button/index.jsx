import Link from 'next/link';

const Button = ({
  onClick,
  page,
  children,
  customStyles,
  buttonType,
  classname,
}) => {
  console.log(classname);
  // If page is provided, return a Link component
  if (page) {
    return (
      // <div className={`flex justify-center items-center`}>
      <Link
        href={`/${page}`}
        className={`${
          classname && classname
        } py-4 px-8 bg-primary text-center text-white font-semibold  overflow-hidden whitespace-nowrap m-auto rounded-lg`}
        style={{ customStyles }}
      >
        {children}
      </Link>
      // </div>
    );
  }

  // If onClick is provided, return a button element
  if (onClick || buttonType) {
    return (
      // <div className='flex justify-center items-center'>
      <button
        onClick={onClick}
        className={`${
          classname && classname
        } py-4 px-8 bg-primary text-center text-white font-semibold  overflow-hidden whitespace-nowrap m-auto rounded-lg`}
        type={buttonType}
        style={{ customStyles }}
      >
        {children}
      </button>
      // </div>
    );
  }

  // If neither page nor onClick are provided, return null
  return null;
};

export default Button;
