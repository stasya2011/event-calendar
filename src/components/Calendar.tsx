import { Badge, Calendar, CalendarProps } from "antd";
import { FC } from "react";
import { IEvent } from "../types";
import { Dayjs } from "dayjs";
import formatDate from "../api/formatDate";

interface CalendarComponentProps {
  events: IEvent[];
}

const CalendarComponent: FC<CalendarComponentProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    const formattedDate: string = formatDate(value);

    const currentDayEvevnt = events.filter((ev: IEvent) => {
      return ev.date === formattedDate;
    });

    return (
      <ul className="events">
        {currentDayEvevnt.map((event, index) => (
          <li key={index}>
            <Badge status={"default"}>{event.description}</Badge>
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (
    current: any,
    info
  ) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};

export default CalendarComponent;
