import { dateInterval } from '../../lib/data/urlBuilder';
import { ErrorLoadingMsg } from '../Errors';

export interface RainSinceProps {
  ok: boolean;
  day: number;
  week: number;
  month: number;
  year: number;
}

export const RainSince = (props: RainSinceProps): JSX.Element => {
  const dayProps: RainSinceIndividualProps = {
    ok: props.ok,
    since: 'day',
    total: props.day,
  };
  const weekProps: RainSinceIndividualProps = {
    ok: props.ok,
    since: 'week',
    total: props.week,
  };
  const monthProps: RainSinceIndividualProps = {
    ok: props.ok,
    since: 'month',
    total: props.month,
  };
  const yearProps: RainSinceIndividualProps = {
    ok: props.ok,
    since: 'year',
    total: props.year,
  };
  return (
    <>
      <RainSinceIndividual {...dayProps}></RainSinceIndividual>
      <RainSinceIndividual {...weekProps}></RainSinceIndividual>
      <RainSinceIndividual {...monthProps}></RainSinceIndividual>
      <RainSinceIndividual {...yearProps}></RainSinceIndividual>
    </>
  );
};

/* props for individual components */
interface RainSinceIndividualProps {
  ok: boolean;
  since: dateInterval;
  total: number;
}

const RainSinceIndividual = (props: RainSinceIndividualProps): JSX.Element => {
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

  return props.ok ? (
    <div className="RainSince" id={backgroundColor()}>
      {props.total}"
      <br />
      {text()}
    </div>
  ) : (
    ErrorLoadingMsg(`rainSince ${props.since}`)
  );
};
