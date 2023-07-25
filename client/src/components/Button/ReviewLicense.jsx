import React from 'react';

const ReviewLicense = ({ classname }) => {
  return (
    <button
      className={`${
        classname && classname
      } px-4 py-2 bg-[#505050] rounded-lg whitespace-nowrap`}
    >
      Review license
    </button>
  );
};

export default ReviewLicense;
