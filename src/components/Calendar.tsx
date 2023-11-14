import { Calendar } from "antd";
import { FC } from "react";
import { IEvent } from "../types";

interface CalendarComponentProps {
  events: IEvent[];
}

const CalendarComponent: FC<CalendarComponentProps> = ({ events }) => {
  return <Calendar onChange={(e) => console.log("onChange ==> ", e)} />;
};

export default CalendarComponent;
