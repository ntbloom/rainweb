import UrlBuilder from '../lib/data/urlBuilder';
import { LastRain, LastRainProps } from './LastRain';
import { CurrentTemp, CurrentTempProps } from './CurrentTemp';
import { AssetStatus, AssetStatusProps } from './AssetStatus';
import '../styles/App.css';
import '../styles/CurrentTemp.css';

const urls = new UrlBuilder();

const lastRainProps: LastRainProps = {
  url: urls.lastRainURL,
};
const lastRain = <LastRain {...lastRainProps}></LastRain>;

const currentTempProps: CurrentTempProps = {
  url: urls.currentTempURL,
};
const currentTemp = <CurrentTemp {...currentTempProps}></CurrentTemp>;

const since = 5;
const interval = 5;
const sensorStatusProps: AssetStatusProps = {
  name: 'sensor',
  url: urls.buildSensorStatusUrl(since),
  since: since,
  interval: interval * 1000,
};
const sensorStatus = <AssetStatus {...sensorStatusProps}></AssetStatus>;

const gatewayStatusProps: AssetStatusProps = {
  name: 'gateway',
  url: urls.buildGatewayStatusUrl(since),
  since: since,
  interval: interval * 1000,
};
const gatewayStatus = <AssetStatus {...gatewayStatusProps}></AssetStatus>;

function App(): JSX.Element {
  return (
    <>
      <>{gatewayStatus}</>
      <>{sensorStatus}</>
      <div className="currentData">
        <>{lastRain}</>
        <>{currentTemp}</>
      </div>
    </>
  );
}

// sensorStatus;

export default App;
