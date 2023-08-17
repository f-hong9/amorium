import MyCalendar from "./Calendar";
import moment from "moment";

import React from "react";

const events = [
  {
    start: moment("2023-08-17T10:00:00").toDate(),
    end: moment("2023-08-17T12:00:00").toDate(),
    title: "Test Appointment",
  },
];

function BasicCalendar() {
  return (
    <div>
      <MyCalendar events={events} />
    </div>
  );
}

export default BasicCalendar;
