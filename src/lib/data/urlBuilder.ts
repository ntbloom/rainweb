import ip from './ipAddress';

class UrlBuilder {
  baseUrl: string;
  lastRainURL: string;

  constructor() {
    this.baseUrl = ip;
    this.lastRainURL = `${this.baseUrl}/lastRain`;
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

  // make a rest API, get back the json promise
  static apiCall(url: string): Promise<Response> {
    const data = fetch(url, UrlBuilder.getInit()).then(async (response) => {
      try {
        return response.json();
      } catch (err) {
        console.log(err);
      }
    });
    return data;
  }
}

export default UrlBuilder;
