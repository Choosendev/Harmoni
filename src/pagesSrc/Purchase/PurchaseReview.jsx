import React from 'react';

const PurchaseReview = () => {
  return (
    <div>
      <div>
        <h1>Review</h1>
        <div>
          <div>
            {/* IMAGE */}
            <div className='w-36 h-36 bg-sky-300'></div>
            <div>
              <p>Type: Hip Hop</p>
              <p>Wintspread</p>
            </div>
          </div>

          {/* MUSIC PROGRESS BAR */}
        </div>
      </div>

      {/* BUYING OPTIONS */}
      <div>
        <h2 className='heading-2'>Buying Options</h2>
      </div>
    </div>
  );
};

export default PurchaseReview;
