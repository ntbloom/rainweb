import ip from './ipAddress';

type dateInterval = 'day' | 'week' | 'month' | 'year';

class UrlBuilder {
  baseUrl: string;
  lastRainURL: string;
  currentTempURL: string;
  sensorStatus: string;
  gatewayStatus: string;
  rainFrom: string;

  constructor() {
    this.baseUrl = ip;
    this.lastRainURL = `${this.baseUrl}/lastRain`;
    this.currentTempURL = `${this.baseUrl}/lastTemp`;
    this.sensorStatus = `${this.baseUrl}/sensorStatus`;
    this.gatewayStatus = `${this.baseUrl}/gatewayStatus`;
    this.rainFrom = `${this.baseUrl}/rain`;
  }

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
  getTimestampInPast(since: dateInterval): string {
    return '';
  }

  buildSensorStatusUrl(since: number): string {
    return `${this.sensorStatus}?since=${since}`;
  }

  buildGatewayStatusUrl(since: number): string {
    return `${this.gatewayStatus}?since=${since}`;
  }

  buildRainFromUrl(since: dateInterval): string {
    return `${this.rainFrom}?from={since}`;
  }
}

export type { dateInterval };
export { UrlBuilder };
