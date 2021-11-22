import { AssetStatus, AssetStatusProps } from './dashboard/AssetStatus';

const gwProps: AssetStatusProps = {
  name: 'gateway',
  ok: true,
  since: 30,
  interval: 30,
  error: false,
};

const sensorProps: AssetStatusProps = {
  name: 'sensor',
  ok: true,
  since: 30,
  interval: 30,
  error: false,
};

function App(): JSX.Element {
  return (
    <>
      <AssetStatus {...gwProps}></AssetStatus>
      <AssetStatus {...sensorProps}></AssetStatus>
    </>
  );
}

export default App;
