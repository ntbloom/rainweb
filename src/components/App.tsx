import React from 'react';
import UrlBuilder from '../lib/data/urlBuilder';
import { LastRain } from './LastRain';
import '../styles/App.css';

const urls = new UrlBuilder();

function App() {
  return <LastRain url={urls.lastRainURL}></LastRain>;
}

export default App;
