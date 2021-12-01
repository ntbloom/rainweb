import { AssetStatus, AssetStatusProps } from './AssetStatus';
import { CurrentTemp, CurrentTempProps } from './CurrentTemp';
import { LastRain, LastRainProps } from './LastRain';
import { RainSince, RainSinceProps } from './RainSince';

const gwProps: AssetStatusProps = {
  ok: true,
  name: 'gateway',
  error: false,
};

const sensorProps: AssetStatusProps = {
  ok: true,
  name: 'sensor',
  error: false,
};

const currentTempProps: CurrentTempProps = {
  ok: true,
  tempF: 100,
  tempC: 37,
};

const lastRainProps: LastRainProps = {
  ok: true,
  timeSince: new Date().toISOString(),
};

const rainSinceProps: RainSinceProps = {
  ok: true,
  day: 0,
  week: 1.2,
  month: 15.2,
  year: 300.4,
};

function App(): JSX.Element {
  return (
    <>
      <AssetStatus {...gwProps}></AssetStatus>
      <AssetStatus {...sensorProps}></AssetStatus>
      <CurrentTemp {...currentTempProps}></CurrentTemp>
      <LastRain {...lastRainProps}></LastRain>
      <RainSince {...rainSinceProps}></RainSince>
    </>
  );
}

export default App;
