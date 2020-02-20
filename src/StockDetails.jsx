import React from 'react';

const StockDetails = ({details}) => {
  return (
    <div className='stock-details'>
      {Object.keys(details).map((detail, index) => (
        <div key={index} className='stock-detail'>
          <p> {detail + ': ' + details[detail]} </p>
        </div>
      ))}
    </div>
  );
};

export default StockDetails;
