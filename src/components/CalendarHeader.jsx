import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';

const CalendarHeader = () => {

    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    const handlePrevMont = () => setMonthIndex(monthIndex - 1);

    const handleNextNonth = () => setMonthIndex(monthIndex + 1);

    const handleCurrentMonth = () => {}
    return (
        <header className='calendar_header'>
            <h1>Calendar</h1>
            <button className='today_btn' onClick={handleCurrentMonth}>
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
        </header>
    )
};

export default CalendarHeader;
