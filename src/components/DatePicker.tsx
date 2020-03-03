import React from "react";

import { DatePicker } from "antd";
import moment from "moment";
//import "antd/dist/antd.css";
// import "../App.css";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export interface IDatePickerComponentProps {}
const DatePickerComponent = (props: IDatePickerComponentProps) => {
  return (
    <div className="date">
      <DatePicker
        defaultValue={moment("01/01/2015", dateFormatList[0])}
        format={dateFormatList}
      />
    </div>
  );
};

export default DatePickerComponent;
