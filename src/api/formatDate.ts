import { Moment } from "moment";
import { Dayjs } from "dayjs";

const formatDate = (date: Dayjs): string => {
  const year = date.year();
  const month = date.month() + 1;
  const dateOfmonth = date.date();
  return `${dateOfmonth}.${month}.${year}`;
};

export default formatDate;
