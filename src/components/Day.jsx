import dayjs from 'dayjs';
import React from 'react';

const Day = ({ day, rowId }) => {
    const getCurrentDateClass = () => {
        return day.format('DD-MM-YY') === dayjs().format("DD-MM-YY") ? 'current_day' : ''
    }
    return (
        <div className='day'>
            <header>
                { rowId === 0 && <p>{day.format('dd').toUpperCase()}</p>}
                <p className={`${getCurrentDateClass()}`} >{day.format('DD')}</p>
            </header>
        </div>
    )
};

export default Day;
