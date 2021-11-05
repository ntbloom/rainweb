import React, { useState } from 'react';
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

const LastRain = (props: LastRainProps): JSX.Element => {
  console.debug(`calling ${props.url}`);
  const [date, setDate] = useState('');
  const [timeSince, setTimeSince] = useState('');
  UrlBuilder.apiCall(props.url).then((data) => {
    const timestamp = (data as unknown as LastRainData).timestamp;
    setDate(TimeUtils.getMonthDayYear(timestamp));
    setTimeSince(`${TimeUtils.getTimeSince(timestamp)} ago`);
  });
  return (
    <p className="LastRain">
      Last Rain Event: {date} ({timeSince})
    </p>
  );
};

export type { LastRainProps };
export { LastRain };
