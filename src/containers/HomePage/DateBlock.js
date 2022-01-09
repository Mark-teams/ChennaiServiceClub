import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function DatePickerBlock() {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <DatePicker className='DatePicker' id='DatePicker' selected={startDate} onChange={(date) => setStartDate(date)}  />
  );
};