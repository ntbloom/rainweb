import { UrlBuilder } from '../lib/data/urlBuilder';
import { LastRain, LastRainProps } from './dashboard/LastRain';
import { CurrentTemp, CurrentTempProps } from './dashboard/CurrentTemp';
import { AssetStatus, AssetStatusProps } from './dashboard/AssetStatus';
import Config from '../lib/data/config';

const urls = new UrlBuilder();

const lastRainProps: LastRainProps = {
  url: urls.lastRainURL,
  interval: Config.CurrentDataInterval * 1000,
};
const lastRain = <LastRain {...lastRainProps}></LastRain>;

const currentTempProps: CurrentTempProps = {
  url: urls.currentTempURL,
  interval: Config.CurrentDataInterval * 1000,
};
const currentTemp = <CurrentTemp {...currentTempProps}></CurrentTemp>;

const since = Config.StatusSince;
const sensorStatusProps: AssetStatusProps = {
  name: 'sensor',
  since: since,
  ok: true,
  interval: Config.StatusInterval * 1000,
  error: false,
};
const sensorStatus = <AssetStatus {...sensorStatusProps}></AssetStatus>;

const gatewayStatusProps: AssetStatusProps = {
  name: 'gateway',
  since: since,
  ok: false,
  interval: Config.StatusInterval * 1000,
  error: false,
};
const gatewayStatus = <AssetStatus {...gatewayStatusProps}></AssetStatus>;

const label = <p id="statusLabel">various status buttons</p>;

function Dashboard(): JSX.Element {
  return (
    <div className="Dashboard">
      <>{gatewayStatus}</>
      <>{sensorStatus}</>
      <>{currentTemp}</>
      <>{lastRain}</>
      <>{label}</>
    </div>
  );
}

export default Dashboard;
