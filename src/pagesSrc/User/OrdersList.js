import React from 'react';
import ListCardWrapper from '@src/Wrapper/ListCardWrapper';
import Image from 'next/image';
import Button from '@src/components/Button';

const OrdersList = () => {
  return (
    <ListCardWrapper>
      <div>
        {/* IMAGE AND TITLE */}
        <div>
          {/* IMAGE */}
          {/* TITLE AND DETAILS */}
          <div>
            {/* TITLE */}
            <div>
              <h2>Zepline starch beat</h2>
              <p>ref: 0889999234</p>
            </div>
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
          <Button>Download again</Button>
        </div>
      </div>
    </ListCardWrapper>
  );
};

export default OrdersList;
