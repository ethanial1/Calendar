import React from 'react';
import Day from './Day';

const Month = ({month}) => {
  return (
      <div className='container_month'>
          {
            month.map(( row, index ) => 
                <React.Fragment key={index}>
                    {
                        row.map((day, index) => (<Day day={day} rowId={index}/>))
                    }
                </React.Fragment>
            )
          }
      </div>
  )
};

export default Month;
