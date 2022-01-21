import dayjs from 'dayjs';
import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';

const CalendarHeader = () => {

    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    const handlePrevMont = () => setMonthIndex(monthIndex - 1);

    const handleNextNonth = () => setMonthIndex(monthIndex + 1);

    const handleReset = () => setMonthIndex(dayjs().month());
    return (
        <header className='calendar_header'>
            <h1>Calendar</h1>
            <button className='today_btn' onClick={handleReset}>
                Today
            </button>
            <button onClick={handlePrevMont}>
                <span className='material-icons-outlined'>
                    chevron_left
                </span>
            </button>
            <button onClick={handleNextNonth}>
                <span className='material-icons-outlined'>
                    chevron_right
                </span>
            </button>
            <h2>
                {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
            </h2>
        </header>
    )
};

export default CalendarHeader;
