import TimeUtils from '../../lib/data/timeUtils';
import ErrorHandlers from '../ErrorComponents';

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
    ErrorHandlers.errorLoadingMsg('LastRain')
  );
};

export type { LastRainProps };
export { LastRain };
