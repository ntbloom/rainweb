class Config {
  // time data, all should be in seconds
  static CurrentDataInterval: number = 10; // when to refresh the lastRain/currentTemp data
  static StatusInterval: number = 10; // when to query gateway/sensor status
  static StatusSince: number = 300;
}

export default Config;
