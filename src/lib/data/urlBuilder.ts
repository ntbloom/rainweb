import ip from './ipAddress';

class UrlBuilder {
  baseUrl: string;
  lastRainURL: string;
  currentTempURL: string;
  sensorStatus: string;
  gatewayStatus: string;

  constructor() {
    this.baseUrl = ip;
    this.lastRainURL = `${this.baseUrl}/lastRain`;
    this.currentTempURL = `${this.baseUrl}/lastTemp`;
    this.sensorStatus = `${this.baseUrl}/sensorStatus`;
    this.gatewayStatus = `${this.baseUrl}/gatewayStatus`;
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

  buildSensorStatusUrl(since: number): string {
    return `${this.sensorStatus}?since=${since}`;
  }

  buildGatewayStatusUrl(since: number): string {
    return `${this.gatewayStatus}?since=${since}`;
  }
}

export default UrlBuilder;
