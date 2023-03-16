function dateToRelativeString(inputDate) {
    const MS_IN_SECOND = 1000;
    const MS_IN_MINUTE = MS_IN_SECOND * 60;
    const MS_IN_HOUR = MS_IN_MINUTE * 60;
    const MS_IN_DAY = MS_IN_HOUR * 24;
    const MS_IN_WEEK = MS_IN_DAY * 7;
    const MS_IN_MONTH = MS_IN_DAY * 30;
    const MS_IN_YEAR = MS_IN_DAY * 365;

    const date = new Date(inputDate);
    const now = new Date();

    const elapsedMs = now - date;

    if (elapsedMs < MS_IN_MINUTE) {
      return "just now";
    } else if (elapsedMs < MS_IN_HOUR) {
      const minutes = Math.floor(elapsedMs / MS_IN_MINUTE);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (elapsedMs < MS_IN_DAY) {
      const hours = Math.floor(elapsedMs / MS_IN_HOUR);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (elapsedMs < MS_IN_WEEK) {
      const days = Math.floor(elapsedMs / MS_IN_DAY);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (elapsedMs < MS_IN_MONTH) {
      const weeks = Math.floor(elapsedMs / MS_IN_WEEK);
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    } else if (elapsedMs < MS_IN_YEAR) {
      const months = Math.floor(elapsedMs / MS_IN_MONTH);
      return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(elapsedMs / MS_IN_YEAR);
      return `${years} year${years !== 1 ? "s" : ""} ago`;
    }
  }
  const inputDate = '2022-12-11T17:26:08.400Z';
  const relativeString = dateToRelativeString(inputDate);
  console.log(relativeString);
