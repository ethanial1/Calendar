import React from 'react';

const Day = ({ day, rowId }) => {
  return (
    <div className='day'>
        <header>
            { rowId === 0 && <p>{day.format('dd').toUpperCase()}</p>}
            <p>{day.format('DD')}</p>
        </header>
    </div>
  )
};

export default Day;
