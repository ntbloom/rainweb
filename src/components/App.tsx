import UrlBuilder from '../lib/data/urlBuilder';
import { LastRain, LastRainProps } from './LastRain';
import { CurrentTemp, CurrentTempProps } from './CurrentTemp';
import '../styles/App.css';
import '../styles/CurrentTemp.css';

const urls = new UrlBuilder();

function App(): JSX.Element {
  const lastRainProps: LastRainProps = {
    url: urls.lastRainURL,
  };
  const currentTempProps: CurrentTempProps = {
    url: urls.currentTempURL,
  };
  return (
    <>
      <LastRain {...lastRainProps}></LastRain>
      <CurrentTemp {...currentTempProps}></CurrentTemp>
    </>
  );
}

export default App;
