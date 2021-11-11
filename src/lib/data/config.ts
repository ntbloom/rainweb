class Config {
  // time data, all should be in seconds
  static CurrentDataInterval: number = 10; // when to refresh the lastRain/currentTemp data
  static StatusInterval: number = 3; // when to query gateway/sensor status
  static StatusSince: number = 5; //
}

export default Config;
