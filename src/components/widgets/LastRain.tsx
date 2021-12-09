import TimeUtils from '../../lib/data/timeUtils';
import { ErrorLoadingMsg } from '../Errors';
import Loading from './Loading';

export interface LastRainProps {
  error: boolean;
  loading: boolean;
  timeSince: string;
}

export const DefaultLastRainProps: LastRainProps = {
  error: true,
  loading: false,
  timeSince: new Date().toISOString(),
};

export const LastRain = (props: LastRainProps): JSX.Element => {
  if (props.loading) {
    return <Loading></Loading>;
  }
  return props.error ? (
    <p className="DashboardButton" id="lastRain">
      Last Rain: {`${TimeUtils.getTimeSince(props.timeSince)} ago`}
    </p>
  ) : (
    ErrorLoadingMsg('LastRain')
  );
};
