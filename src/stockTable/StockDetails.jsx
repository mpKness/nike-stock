import React from 'react';

/**
 * takes an object of stock details and displays them
 * @param {object} details object of stock details
 */
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
