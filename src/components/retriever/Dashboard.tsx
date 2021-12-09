import { useEffect, useState } from 'react';
import { fetchData } from '../../lib/data/fetchData';
import TempUtils from '../../lib/data/tempUtils';
import { UrlBuilder } from '../../lib/data/urlBuilder';
import {
  AssetStatus,
  AssetStatusPayload,
  AssetStatusProps,
  DefaultGatewayStatusProps,
  DefaultSensorStatusProps,
} from '../widgets/AssetStatus';
import {
  CurrentTemp,
  CurrentTempPayload,
  CurrentTempProps,
  DefaultCurrentTempProps,
} from '../widgets/CurrentTemp';

// display the current temperature values
const GetCurrentTemp = (): JSX.Element => {
  const [calledTemp, setCalledTemp] = useState(false);
  const [tempC, setTempC] = useState(DefaultCurrentTempProps.tempC);
  const [tempF, setTempF] = useState(DefaultCurrentTempProps.tempF);
  const [tempLoading, setTempLoading] = useState(
    DefaultCurrentTempProps.loading
  );
  const [tempError, setTempError] = useState(DefaultCurrentTempProps.error);
  useEffect(() => {
    const tempOnSuccess = (payload: CurrentTempPayload) => {
      const c = payload['last_temp_c'];
      setTempC(c);
      setTempF(TempUtils.celToFahr(c, 'number') as number);
      setTempLoading(false);
      setTempError(false);
    };
    const tempOnFailure = () => {
      setTempError(true);
    };
    if (!calledTemp) {
      fetchData(UrlBuilder.currentTempURL, tempOnSuccess, tempOnFailure);
      setCalledTemp(true);
    }
  }, [calledTemp, tempC, tempError]);
  const currentTempProps: CurrentTempProps = {
    tempC: tempC,
    tempF: tempF,
    loading: tempLoading,
    error: tempError,
  };
  return <CurrentTemp {...currentTempProps}></CurrentTemp>;
};

// show the gateway and sensor status
const Status = (props: AssetStatusProps): JSX.Element => {
  const [calledStatus, setCalledStatus] = useState(false);
  const [up, setUp] = useState(props.up);
  const [assetLoading, setAssetLoading] = useState(props.loading);
  const [assetError, setAssetError] = useState(props.error);

  useEffect(() => {
    const assetOnSucess = (payload: AssetStatusPayload) => {
      setUp(payload.up);
      setAssetLoading(false);
      setAssetError(false);
    };
    const assetOnFailure = () => {
      setAssetError(true);
    };
    if (!calledStatus) {
      const url = () => {
        switch (props.name) {
          case 'gateway':
            return UrlBuilder.gatewayStatus;
          case 'sensor':
            return UrlBuilder.sensorStatus;
        }
      };
      fetchData(url(), assetOnSucess, assetOnFailure);
      setCalledStatus(true);
    }
  }, [up, props.name, calledStatus]);

  const assetStatusProps: AssetStatusProps = {
    up: up,
    name: props.name,
    loading: assetLoading,
    error: assetError,
  };
  return <AssetStatus {...assetStatusProps}></AssetStatus>;
};

export const Dashboard = (): JSX.Element => {
  return (
    <>
      <GetCurrentTemp></GetCurrentTemp>
      <Status {...DefaultSensorStatusProps}></Status>
      <Status {...DefaultGatewayStatusProps}></Status>
    </>
  );
};
