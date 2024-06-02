export function extractMonthAndDay(dateString: string) {
    const match = dateString.match(/^(\w+) (\d+)/);
  
    if (match) {
      const month = match[1]; // "May"
      const day = match[2];   // "25"
      
      return { month, day };
    }

    return null
  }