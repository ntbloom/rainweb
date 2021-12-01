import TimeUtils from '../lib/data/timeUtils';
import { ErrorLoadingMsg } from './Errors';

interface LastRainProps {
  error: boolean;
  timeSince: string;
}

const DefaultLastRainProps: LastRainProps = {
  error: true,
  timeSince: new Date().toISOString(),
};

const LastRain = (props: LastRainProps): JSX.Element => {
  return props.error ? (
    <p className="DashboardButton" id="lastRain">
      Last Rain: {`${TimeUtils.getTimeSince(props.timeSince)} ago`}
    </p>
  ) : (
    ErrorLoadingMsg('LastRain')
  );
};

export type { LastRainProps };
export { LastRain, DefaultLastRainProps };
