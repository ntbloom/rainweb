import { useState, useEffect } from 'react';
import TimeUtils from '../lib/data/timeUtils';
import UrlBuilder from '../lib/data/urlBuilder';

interface LastRainProps {
  url: string;
  //   // come back to these later?
  //   lastRainMM: number;
  //   lastRainDuration: number;
}
interface LastRainData {
  timestamp: string;
}

const whoops = (msg: string) => {
  return <p>Error loading: {msg}</p>;
};

const LastRain = (props: LastRainProps): JSX.Element => {
  const [date, setDate] = useState('...');
  const [timeSince, setTimeSince] = useState('...');
  const [error, setError] = useState(false);
  useEffect(() => {
    console.debug(`calling ${props.url} at ${new Date().toISOString()}`);
    fetch(props.url, UrlBuilder.getInit())
      .then(async (response) => {
        const data = await response.json();
        const timestamp = (data as unknown as LastRainData).timestamp;
        setDate(TimeUtils.getMonthDayYear(timestamp));
        setTimeSince(`${TimeUtils.getTimeSince(timestamp)} ago`);
      })
      .catch((err) => {
        console.error(`err=${err}`);
        setError(true);
      });
  }, [props.url]);
  return !error ? (
    <p className="LastRain">
      Last Rain Event: {date} ({timeSince})
    </p>
  ) : (
    whoops('LastRain')
  );
};

export type { LastRainProps };
export { LastRain };
