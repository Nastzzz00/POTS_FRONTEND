import React, { Fragment } from "react";
import Calendar from "react-calendar";

const DatePicker = () => {
  return (
    <Fragment>
      <Calendar onChange={() => console.log("DATE")} />
    </Fragment>
  );
};

export default DatePicker;
