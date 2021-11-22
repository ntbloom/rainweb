import ErrorHandlers from '../ErrorComponents';

type assetType = 'gateway' | 'sensor';

interface AssetStatusProps {
  name: assetType;
  ok: boolean;
  since: number;
  interval: number;
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
    ErrorHandlers.errorLoadingMsg(props.name)
  );
};

export type { AssetStatusProps };
export { AssetStatus };
