import { format } from "date-fns";

export const dateFormater = (date: string) => {
  const formattedDate = format(new Date(date), "MM-dd-yyyy");
  return formattedDate;
};
