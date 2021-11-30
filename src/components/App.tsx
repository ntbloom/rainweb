import { AssetStatus, AssetStatusProps } from './dashboard/AssetStatus';
import { CurrentTemp, CurrentTempProps } from './dashboard/CurrentTemp';
import { LastRain, LastRainProps } from './dashboard/LastRain';

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

function App(): JSX.Element {
  return (
    <>
      <AssetStatus {...gwProps}></AssetStatus>
      <AssetStatus {...sensorProps}></AssetStatus>
      <CurrentTemp {...currentTempProps}></CurrentTemp>
      <LastRain {...lastRainProps}></LastRain>
    </>
  );
}

export default App;
