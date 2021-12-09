import React from 'react';
import TempUtils from '../../lib/data/tempUtils';
import { UrlBuilder } from '../../lib/data/urlBuilder';
import {
  CurrentTemp,
  CurrentTempProps,
  CurrentTempPayload,
  DefaultCurrentTempProps,
} from '../widgets/CurrentTemp';
// import { DefaultLastRainProps, LastRainProps } from './LastRain';
// import { RainSinceProps } from './RainSince';
import { fetchData } from '../../lib/data/fetchData';

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
    const onSuccess = (data: CurrentTempPayload): void => {
      const tempC = data['last_temp_c'];
      if (tempC === undefined) {
        throw new Error('does not match interface');
      }
      const tempF = TempUtils.celToFahr(tempC, 'number') as number;
      this.setState({
        currentTempProps: {
          tempF: tempF,
          tempC: tempC,
          loading: false,
          error: false,
        },
      });
    };
    const onFailure = (error: Error): void => {
      this.setState({
        currentTempProps: {
          loading: false,
          error: true,
        },
      });
    };
    fetchData<CurrentTempPayload>(
      UrlBuilder.currentTempURL,
      onSuccess,
      onFailure
    );
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
