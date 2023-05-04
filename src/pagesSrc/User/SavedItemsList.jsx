import React from 'react';
import ListCardWrapper from '@src/components/Wrapper/ListCardWrapper';

const SavedItemsList = () => {
  return (
    <ListCardWrapper>
      {' '}
      <div>
        {/* IMAGE AND TITLE */}
        <div>
          {/* IMAGE */}
          {/* TITLE AND DETAILS */}
          <div>
            {/* TITLE */}
            <h2>Zepline starch beat</h2>
            {/* OTHER DETAILS */}
            <div>
              <p>
                by Kelvin Mark <span>@mafikozolo</span>
              </p>
              <p>Premium License</p>
              <div>24-12-2022</div>
            </div>
          </div>
        </div>

        <div>
          <p>NGN 200,000</p>
          <Button>BUY NOW</Button>
        </div>
      </div>
    </ListCardWrapper>
  );
};

export default SavedItemsList;
