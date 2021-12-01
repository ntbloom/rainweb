import TimeUtils from '../lib/data/timeUtils';
import { ErrorLoadingMsg } from './Errors';

interface LastRainProps {
  ok: boolean;
  timeSince: string;
}

const LastRain = (props: LastRainProps): JSX.Element => {
  return props.ok ? (
    <p className="DashboardButton" id="lastRain">
      Last Rain: {`${TimeUtils.getTimeSince(props.timeSince)} ago`}
    </p>
  ) : (
    ErrorLoadingMsg('LastRain')
  );
};

export type { LastRainProps };
export { LastRain };
