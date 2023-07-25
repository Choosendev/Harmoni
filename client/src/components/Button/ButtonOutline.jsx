import Link from 'next/link';

const ButtonOutline = ({
  onClick,
  page,
  children,
  styles,
  buttonType,
  classname,
}) => {
  // If page is provided, return a Link component
  if (page) {
    return (
      // <div className='flex justify-center items-center'>
      <Link
        href={`/${page}`}
        className={`${
          classname && classname
        } py-4 px-8 rounded-lg text-white font-semibold text-center relative overflow-hidden whitespace-nowrap border border-primary`}
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
        } py-4 px-8 rounded-lg text-white font-semibold text-center relative overflow-hidden whitespace-nowrap border border-primary ${styles}  `}
        type={buttonType}
      >
        {children}
      </button>
      // </div>
    );
  }

  // If neither page nor onClick are provided, return null
  return null;
};

export default ButtonOutline;
