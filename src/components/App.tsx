import UrlBuilder from '../lib/data/urlBuilder';
import { LastRain, LastRainProps } from './LastRain';
import '../styles/App.css';

const urls = new UrlBuilder();

function App(): JSX.Element {
  const props: LastRainProps = {
    url: urls.lastRainURL,
  };
  return LastRain(props);
}

export default App;
