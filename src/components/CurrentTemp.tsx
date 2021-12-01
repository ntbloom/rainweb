import TempUtils from '../lib/data/tempUtils';
import { ErrorLoadingMsg } from './Errors';

interface CurrentTempProps {
  ok: boolean;
  tempF: number;
  tempC: number;
}

const CurrentTemp = (props: CurrentTempProps): JSX.Element => {
  return props.ok ? (
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
export { CurrentTemp };
