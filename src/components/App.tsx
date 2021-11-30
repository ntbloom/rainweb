import { AssetStatus, AssetStatusProps } from './dashboard/AssetStatus';
import { CurrentTemp, CurrentTempProps } from './dashboard/CurrentTemp';

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

function App(): JSX.Element {
  return (
    <>
      <AssetStatus {...gwProps}></AssetStatus>
      <AssetStatus {...sensorProps}></AssetStatus>
      <CurrentTemp {...currentTempProps}></CurrentTemp>
    </>
  );
}

export default App;
