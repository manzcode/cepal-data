export function calculateEndDate(startDateString: string, durationHours: number) {
    // Convert the start date string to a Date object
    const startDate = new Date(startDateString);

    // Calculate the duration in milliseconds
    const durationMilliseconds = +durationHours * 60 * 60 * 1000;

    // Add the duration to the start date
    const endDate = new Date(startDate.getTime() + (+durationMilliseconds));

     // Format the end date to the desired format
     const options: any = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: true,
    };
    const formattedEndDate = new Intl.DateTimeFormat('en-US', options).format(endDate);

    return formattedEndDate;
}