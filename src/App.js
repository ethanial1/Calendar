import React, { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import SideBar from "./components/SideBar";
import { getMonth } from "./helpers/utils";

import './assets/styles.css';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  
  return (
    <div className="App">
      <CalendarHeader />
      <div>
        <SideBar />
        <Month month={currentMonth}/>
      </div>
    </div>
  );
}

export default App;
