import { useState, useEffect } from 'react';
import ErrorHandlers from './ErrorHandlers';
import UrlBuilder from '../lib/data/urlBuilder';

type assetType = 'gateway' | 'sensor';

interface AssetStatusProps {
  name: assetType;
  since: number;
  url: string;
  interval: number;
}

interface GatewayStatusData {
  gateway_active: boolean;
}

interface SensorStatusData {
  sensor_active: boolean;
}

const AssetStatus = (props: AssetStatusProps): JSX.Element => {
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    function apiCall() {
      console.debug(`calling ${props.url} at ${new Date().toISOString()}`);
      fetch(props.url, UrlBuilder.getInit())
        .then(async (response) => {
          const data = (await response.json()) as unknown;
          const status =
            props.name === 'gateway'
              ? (data as GatewayStatusData).gateway_active
              : (data as SensorStatusData).sensor_active;
          setOk(status);
        })
        .catch((err) => {
          console.error(`err=${err}`);
          setError(true);
        });
    }

    const reload = setInterval(() => {
      apiCall();
    }, props.interval);
    return () => clearInterval(reload);
  }, [props]);

  const text = ok ? 'up' : 'down';
  return !error ? (
    <div className="DashboardButton" id={text}>
      {props.name}
    </div>
  ) : (
    ErrorHandlers.errorLoadingMsg(props.name)
  );
};

export type { AssetStatusProps };
export { AssetStatus };
