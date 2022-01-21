import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import SideBar from "./components/SideBar";
import { getMonth } from "./helpers/utils";
import GlobalContext from "./Context/GlobalContext";

import './assets/styles.css';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  
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
