import { useState, useEffect } from 'react';
import TimeUtils from '../../lib/data/timeUtils';
import { UrlBuilder } from '../../lib/data/urlBuilder';
import ErrorHandlers from './../ErrorHandlers';

interface LastRainProps {
  url: string;
  interval: number;
}
interface LastRainData {
  timestamp: string;
}

const LastRain = (props: LastRainProps): JSX.Element => {
  // const [date, setDate] = useState('...');
  const [timeSince, setTimeSince] = useState('...');
  const [error, setError] = useState(false);
  useEffect(() => {
    function apiCall() {
      console.debug(`calling ${props.url} at ${new Date().toISOString()}`);
      fetch(props.url, UrlBuilder.getInit())
        .then(async (response) => {
          const data = await response.json();
          const timestamp = (data as unknown as LastRainData).timestamp;
          // setDate(TimeUtils.getMonthDayYear(timestamp));
          setTimeSince(`${TimeUtils.getTimeSince(timestamp)} ago`);
        })
        .catch((err) => {
          console.error(`err=${err}`);
          setError(true);
        });
    }
    apiCall();

    const reload = setInterval(() => {
      apiCall();
    }, props.interval);
    return () => clearInterval(reload);
  }, [props]);
  return !error ? (
    <p className="DashboardButton" id="lastRain">
      Last Rain: {timeSince}
    </p>
  ) : (
    ErrorHandlers.errorLoadingMsg('LastRain')
  );
};

export type { LastRainProps };
export { LastRain };
