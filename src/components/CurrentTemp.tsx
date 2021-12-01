import TempUtils from '../lib/data/tempUtils';
import { ErrorLoadingMsg } from './Errors';
import Loading from './Loading';

interface CurrentTempProps {
  tempF: number;
  tempC: number;
  loading: boolean;
  error: boolean;
}

const DefaultCurrentTempProps: CurrentTempProps = {
  tempF: -999,
  tempC: -999,
  loading: false,
  error: true,
};

const CurrentTemp = (props: CurrentTempProps): JSX.Element => {
  if (props.loading) {
    return <Loading></Loading>;
  }
  return !props.error ? (
    <p className="DashboardButton" id="default">
      {props.tempC}
      {TempUtils.C}/{props.tempF}
      {TempUtils.F}
    </p>
  ) : (
    ErrorLoadingMsg('temperature')
  );
};

export type { CurrentTempProps };
export { CurrentTemp, DefaultCurrentTempProps };
