

export function useDateFormatter(locale) {

  function format(inputDate) {
    // console.log('inputDate', inputDate)
    // console.log('typeof(inputDate)', typeof(inputDate))
    
    const isoString = typeof(inputDate) === "date" ? inputDate.toISOString() : inputDate;

    const date = new Date(isoString);
    const formattedDate = new Intl.DateTimeFormat(locale).format(date);

    return formattedDate;

  }

  function formatLong(inputDate) {
    const isoString = inputDate.toISOString();

    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(isoString);
    const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

    return formattedDate;

  }

  return {
    format,
    formatLong,
    
  };
}




