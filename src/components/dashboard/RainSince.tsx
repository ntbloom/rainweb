import { dateInterval } from '../../lib/data/urlBuilder';

interface RainSinceProps {
  since: dateInterval;
  total: number;
}

const RainSince = (props: RainSinceProps): JSX.Element => {
  const text = () => {
    switch (props.since) {
      case 'day':
        return '24 hr';
      case 'week':
        return 'week';
      case 'month':
        return 'month';
      case 'year':
        return 'year';
    }
  };
  const backgroundColor = () => {
    // TODO: add other colors later based on results
    return 'rain-default';
  };

  return (
    <div className="RainSince" id={backgroundColor()}>
      {props.total}"
      <br />
      {text()}
    </div>
  );
};

export type { RainSinceProps };
export { RainSince };
