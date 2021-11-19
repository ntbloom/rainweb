type sinceInterval = 'day' | 'week' | 'month' | 'year';

interface RainSinceProps {
  since: sinceInterval;
  total: number;
}

const RainSince = (props: RainSinceProps): JSX.Element => {
  const text = () => {
    switch (props.since) {
      case 'day':
        return 'day';
      case 'week':
        return 'wk';
      case 'month':
        return 'mon';
      case 'year':
        return 'yr';
    }
  };
  return <p>{text}</p>;
};

export default RainSince;
