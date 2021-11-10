import { useState, useEffect } from 'react';
import ErrorHandlers from './ErrorHandlers';
import UrlBuilder from '../lib/data/urlBuilder';

type assetType = 'gateway' | 'sensor';

interface AssetStatusProps {
  name: assetType;
  since: number;
  url: string;
}

interface AssetStatusData {
  ok: boolean;
}

const AssetStatus = (props: AssetStatusProps): JSX.Element => {
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.debug(`calling ${props.url} at ${new Date().toISOString()}`);
    fetch(props.url, UrlBuilder.getInit())
      .then(async (response) => {
        const data = await response.json();
        const status = (data as unknown as AssetStatusData).ok;
        setOk(status);
      })
      .catch((err) => {
        console.error(`err=${err}`);
        setError(true);
      });
  }, [props.url]);
  return !error ? (
    ok ? (
      <p>
        {props.name} ok since {props.since} seconds
      </p>
    ) : (
      <p>
        {props.name} bad since {props.since} seconds
      </p>
    )
  ) : (
    ErrorHandlers.errorLoadingMsg(props.name)
  );
};

export type { AssetStatusProps, assetType };
export { AssetStatus };
