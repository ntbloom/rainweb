import { useEffect, useState } from 'react';
import { fetchData } from '../../lib/data/fetchData';
import TempUtils from '../../lib/data/tempUtils';
import { UrlBuilder } from '../../lib/data/urlBuilder';
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

export const Dashboard = (): JSX.Element => {
  return (
    <>
      <GetCurrentTemp></GetCurrentTemp>
    </>
  );
};
