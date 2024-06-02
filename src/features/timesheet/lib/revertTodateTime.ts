import { parse, format } from 'date-fns';

export const revertDateTime = (inputDate: string): string => {
    const parsedDate = parse(inputDate, 'MMMM d, yyyy h:mm a', new Date());
    const formattedDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
    return formattedDate;
  }