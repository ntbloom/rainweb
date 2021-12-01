import { ErrorLoadingMsg } from './Errors';

type assetType = 'gateway' | 'sensor';

interface AssetStatusProps {
  ok: boolean;
  name: assetType;
  error: boolean;
}

/* Show the status of an asset, in this case a sensor and gateway */
const AssetStatus = (props: AssetStatusProps): JSX.Element => {
  const text = props.ok ? 'up' : 'down';
  return !props.error ? (
    <div className="DashboardButton" id={text}>
      {props.name}
    </div>
  ) : (
    ErrorLoadingMsg(props.name)
  );
};

export type { AssetStatusProps };
export { AssetStatus };
