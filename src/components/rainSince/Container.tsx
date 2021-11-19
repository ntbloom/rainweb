import { RainSince, RainSinceProps } from './RainSince';

const RainSinceContainer = (): JSX.Element => {
  const dailyProps: RainSinceProps = {
    since: 'day',
    total: 1.1,
  };
  const dailySince = <RainSince {...dailyProps}></RainSince>;

  const weeklyProps: RainSinceProps = {
    since: 'week',
    total: 7.0,
  };
  const weeklySince = <RainSince {...weeklyProps}></RainSince>;

  const monthlyProps: RainSinceProps = {
    since: 'month',
    total: 24.3,
  };
  const monthlySince = <RainSince {...monthlyProps}></RainSince>;

  const yearlyProps: RainSinceProps = {
    since: 'year',
    total: 312.1,
  };
  const yearlySince = <RainSince {...yearlyProps}></RainSince>;

  const label = <p id="rainSinceLabel">rain totals</p>;

  return (
    <div className="RainSince">
      <>{dailySince}</>
      <>{weeklySince}</>
      <>{monthlySince}</>
      <>{yearlySince}</>
      <>{label}</>
    </div>
  );
};

export default RainSinceContainer;
