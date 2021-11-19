const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

class TimeUtils {
  // parse seconds into human-readable string
  static secondsToString(seconds: number): string {
    // just return "hour" for small increments
    if (seconds < HOUR) {
      return `<1 hr`;
    }
    // return "hours" for less than 1 day
    let unit: string;
    if (seconds < DAY) {
      const hours = Math.floor(seconds / HOUR);
      hours === 1 ? (unit = 'hr') : (unit = 'hrs');
      return `${hours} ${unit}`;
    }
    // return days for the rest
    const days = Math.floor(seconds / DAY);
    days === 1 ? (unit = 'day') : (unit = 'days');
    return `${days} ${unit}`;
  }

  // gets a human-readable string of time passed since the date
  static getTimeSince(timestamp: string): string {
    const now = new Date().getTime();
    const dateAsSeconds = Math.floor(Date.parse(timestamp));
    return this.secondsToString((now - dateAsSeconds) / 1000);
  }

  // turn a timestamp string into `Month Day, Year`
  static getMonthDayYear(timestamp: string): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    };
    const date = new Date(Date.parse(timestamp)).toLocaleString(
      'default',
      options
    );
    return date;
  }

  // timestamp should look like `2021-05-23T01:47:30+00:00`
  static getTimestampRFC3339(raw: Date): string {
    const year = raw.getFullYear();
    const month = raw.getMonth() + 1;
    const day = raw.getDate();
    const hour = raw.getHours();
    const min = raw.getMinutes();
    const sec = raw.getSeconds();
    const minutesOffset = raw.getTimezoneOffset();
    const rawHourOffset = Math.floor(minutesOffset / 60);
    const offH = rawHourOffset < 10 ? `0${rawHourOffset}` : rawHourOffset;
    const rawMinutesOffset = minutesOffset - rawHourOffset * 60;
    const offM =
      rawMinutesOffset < 10 ? `0${rawMinutesOffset}` : rawMinutesOffset;

    return `${year}-${month}-${day}T${hour}:${min}:${sec}+${offH}:${offM}`;
  }
}

export default TimeUtils;
