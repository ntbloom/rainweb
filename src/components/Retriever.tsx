import React from 'react';
import {
  AssetStatus,
  AssetStatusProps,
  DefaultGatewayStatusProps,
} from './AssetStatus';
import {
  CurrentTemp,
  CurrentTempProps,
  DefaultCurrentTempProps,
} from './CurrentTemp';
// import { DefaultLastRainProps, LastRainProps } from './LastRain';
// import { RainSinceProps } from './RainSince';

type RetrieverProps = any;

type RetrieverState = {
  ready: boolean;
  gwProps: AssetStatusProps;
  //   sensorProps: AssetStatusProps;
  currentTempProps: CurrentTempProps;
  //   lastRainProps: LastRainProps;
  //   rainSinceProps: RainSinceProps;
};

class Retriever extends React.Component<RetrieverProps, RetrieverState> {
  constructor(props: object) {
    super(props);
    this.state = {
      ready: false,
      gwProps: DefaultGatewayStatusProps,
      currentTempProps: DefaultCurrentTempProps,
    };
    this.setGatewayStatusProps = this.setGatewayStatusProps.bind(this);
    this.setCurrentTempProps = this.setCurrentTempProps.bind(this);
  }

  componentDidMount() {
    this.setGatewayStatusProps();
    this.setCurrentTempProps();
  }

  setGatewayStatusProps() {
    const gwProps: AssetStatusProps = {
      up: true,
      name: 'gateway',
      loading: false,
      error: false,
    };
    this.setState({ gwProps: gwProps });
  }

  setCurrentTempProps() {
    const tempProps: CurrentTempProps = {
      tempF: 98,
      tempC: 38,
      loading: false,
      error: false,
    };
    this.setState({ currentTempProps: tempProps });
  }

  render() {
    return (
      <>
        <AssetStatus {...this.state.gwProps}></AssetStatus>
        <CurrentTemp {...this.state.currentTempProps}></CurrentTemp>
      </>
    );
  }
}

export default Retriever;
