import { useState, useEffect } from 'react';
import { UrlBuilder } from '../../lib/data/urlBuilder';
import ErrorHandlers from '../ErrorHandlers';
import TempUtils from '../../lib/data/tempUtils';

interface CurrentTempProps {
  url: string;
  interval: number;
}
interface CurrentTempData {
  last_temp_c: number;
}

const CurrentTemp = (props: CurrentTempProps): JSX.Element => {
  const [tempC, setTempC] = useState(-999);
  const [tempF, setTempF] = useState(-999);
  const [error, setError] = useState(false);
  useEffect(() => {
    function apiCall() {
      console.debug(`calling ${props.url} at ${new Date().toISOString()}`);
      fetch(props.url, UrlBuilder.getInit())
        .then(async (response) => {
          const data = await response.json();
          setTempC((data as unknown as CurrentTempData).last_temp_c);
          setTempF(TempUtils.celToFahr(tempC, 'string') as number);
        })
        .catch((err) => {
          console.error(`err=${err}`);
          setError(true);
        });
    }
    apiCall();

    const reload = setInterval(() => {
      apiCall();
    }, props.interval);
    return () => clearInterval(reload);
  }, [props, tempC]);
  return !error ? (
    <p className="DashboardButton" id="default">
      {tempC}
      {TempUtils.C}/{tempF}
      {TempUtils.F}
    </p>
  ) : (
    ErrorHandlers.errorLoadingMsg('LastTemp')
  );
};

export type { CurrentTempProps };
export { CurrentTemp };
