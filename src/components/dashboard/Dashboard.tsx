import { UrlBuilder } from '../../lib/data/urlBuilder';
import { LastRain, LastRainProps } from './LastRain';
import { CurrentTemp, CurrentTempProps } from './CurrentTemp';
import { AssetStatus, AssetStatusProps } from './AssetStatus';
import Config from '../../lib/data/config';

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
  url: urls.buildSensorStatusUrl(since),
  since: since,
  interval: Config.StatusInterval * 1000,
};
const sensorStatus = <AssetStatus {...sensorStatusProps}></AssetStatus>;

const gatewayStatusProps: AssetStatusProps = {
  name: 'gateway',
  url: urls.buildGatewayStatusUrl(since),
  since: since,
  interval: Config.StatusInterval * 1000,
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
