import TempUtils from '../../lib/data/tempUtils';
import { ErrorLoadingMsg } from '../Errors';
import Loading from './Loading';

export interface CurrentTempProps {
  tempF?: number;
  tempC?: number;
  loading: boolean;
  error: boolean;
}

export const DefaultCurrentTempProps: CurrentTempProps = {
  loading: false,
  error: true,
};

export const CurrentTemp = (props: CurrentTempProps): JSX.Element => {
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
