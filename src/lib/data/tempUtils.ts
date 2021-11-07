type numOrString = 'number' | 'string';

class TempUtils {
  static degree = '\u00B0';
  static F = `${this.degree}F`;
  static C = `${this.degree}C`;

  // convert Celsius to Fahrenheit
  static celToFahr(c: number, returnType: numOrString): string | number {
    const val = c * (9 / 5) + 32;
    switch (returnType) {
      case 'number':
        return val;
      case 'string':
        return Math.round(val).toString();
    }
  }

  // convert Fahrenheit to Celsius
  static fahrToCel(f: number, returnType: numOrString): string | number {
    const val = ((f - 32) * 5) / 9;
    switch (returnType) {
      case 'number':
        return val;
      case 'string':
        return Math.round(val).toString();
    }
  }
}

export default TempUtils;
