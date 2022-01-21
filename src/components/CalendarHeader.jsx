import React from 'react';


const CalendarHeader = () => {
  return (
    <header className='calendar_header'>
        <h1>Calendar</h1>
        <button className='today_btn'>
            Today
        </button>
        <button>
            <span className='material-icons-outlined'>
                chevron_left
            </span>
        </button>
        <button>
            <span className='material-icons-outlined'>
                chevron_right
            </span>
        </button>
    </header>
  )
};

export default CalendarHeader;
