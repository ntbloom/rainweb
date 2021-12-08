import TimeUtils from '../../lib/data/timeUtils';
import { ErrorLoadingMsg } from '../Errors';

export interface LastRainProps {
  error: boolean;
  timeSince: string;
}

export const DefaultLastRainProps: LastRainProps = {
  error: true,
  timeSince: new Date().toISOString(),
};

export const LastRain = (props: LastRainProps): JSX.Element => {
  return props.error ? (
    <p className="DashboardButton" id="lastRain">
      Last Rain: {`${TimeUtils.getTimeSince(props.timeSince)} ago`}
    </p>
  ) : (
    ErrorLoadingMsg('LastRain')
  );
};
