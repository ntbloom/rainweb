import TempUtils from '../../lib/data/tempUtils';
import ErrorHandlers from '../ErrorComponents';

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
    ErrorHandlers.errorLoadingMsg('temperature')
  );
};

export type { CurrentTempProps };
export { CurrentTemp };
