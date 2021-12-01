import ip from './ipAddress';

type dateInterval = 'day' | 'week' | 'month' | 'year';

// Stateless class component for manipulating URLS
class UrlBuilder {
  static readonly lastRainURL = `${ip}/lastRain`;
  static readonly currentTempURL = `${ip}/lastTemp`;
  static readonly sensorStatus = `${ip}/sensorStatus`;
  static readonly gatewayStatus = `${ip}/gatewayStatus`;
  static readonly rainFrom = `${ip}/rain`;

  // get init args for all cors/json fetch GET requests
  static getInit(): RequestInit {
    const cors: RequestMode = 'cors';
    const args = {
      mode: cors,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };
    return args;
  }
  // get a timestamp from X interval ago
  static getTimestampInPast(since: dateInterval): string {
    return '';
  }

  static buildSensorStatusUrl(since: number): string {
    return `${UrlBuilder.sensorStatus}?since=${since}`;
  }

  static buildGatewayStatusUrl(since: number): string {
    return `${UrlBuilder.gatewayStatus}?since=${since}`;
  }

  static buildRainFromUrl(since: dateInterval): string {
    return `${UrlBuilder.rainFrom}?from={since}`;
  }
}

export type { dateInterval };
export { UrlBuilder };
