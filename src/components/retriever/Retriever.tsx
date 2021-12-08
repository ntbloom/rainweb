import React from 'react';
import TempUtils from '../../lib/data/tempUtils';
import { UrlBuilder } from '../../lib/data/urlBuilder';
import {
  CurrentTemp,
  CurrentTempProps,
  DefaultCurrentTempProps,
} from '../widgets/CurrentTemp';
// import { DefaultLastRainProps, LastRainProps } from './LastRain';
// import { RainSinceProps } from './RainSince';

type RetrieverProps = any;

type RetrieverState = {
  ready: boolean;
  currentTempProps: CurrentTempProps;
};

class Retriever extends React.Component<RetrieverProps, RetrieverState> {
  constructor(props: object) {
    super(props);
    this.state = {
      ready: false,
      currentTempProps: DefaultCurrentTempProps,
    };
    this.setCurrentTempProps = this.setCurrentTempProps.bind(this);
  }

  componentDidMount() {
    this.setCurrentTempProps();
  }

  setCurrentTempProps() {
    let current = this.state.currentTempProps;
    current.loading = true;
    this.setState({ currentTempProps: current });

    fetch(UrlBuilder.currentTempURL, UrlBuilder.getInit())
      .then(async (response) => {
        const data = await response.json();
        const tempC = data['last_temp_c'] as number;
        const tempF = TempUtils.celToFahr(tempC, 'number') as number;
        this.setState({
          currentTempProps: {
            tempF: tempF,
            tempC: tempC,
            loading: false,
            error: false,
          },
        });
      })
      .catch((err) => {
        console.error(`err=${err}`);
        this.setState({
          currentTempProps: {
            loading: false,
            error: true,
          },
        });
      });
  }

  render() {
    return (
      <>
        <CurrentTemp {...this.state.currentTempProps}></CurrentTemp>
      </>
    );
  }
}

export default Retriever;
