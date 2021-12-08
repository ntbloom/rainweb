import { ErrorLoadingMsg } from '../Errors';
import Loading from './Loading';

export type assetType = 'gateway' | 'sensor';

export interface AssetStatusProps {
  up?: boolean;
  name: assetType;
  loading: boolean;
  error: boolean;
}

export const DefaultGatewayStatusProps: AssetStatusProps = {
  up: false,
  name: 'gateway',
  loading: false,
  error: true,
};

/* Show the status of an asset, in this case a sensor and gateway */
export const AssetStatus = (props: AssetStatusProps): JSX.Element => {
  if (props.loading) {
    return <Loading></Loading>;
  }
  const text = props.up ? 'up' : 'down';
  return !props.error ? (
    <div className="DashboardButton" id={text}>
      {props.name}
    </div>
  ) : (
    ErrorLoadingMsg(props.name)
  );
};
