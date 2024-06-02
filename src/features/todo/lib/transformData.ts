import { format, parseISO } from "date-fns";
export const transformDate = (
  dateString: string,
  timeString?: string
): string => {
  const date = parseISO(dateString);
  let hours, minutes;
  if (timeString) {
    [hours, minutes] = timeString.split(":").map(Number);
    date.setHours(hours, minutes);
  }
  return format(date, "MMMM d, yyyy h:mm a");
};
