// Unit conversion helpers
export function toFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

export function toMph(kmh) {
  return kmh * 0.621371;
}

// Round to 1 decimal place
export function round(n) {
  return Math.round(n * 10) / 10;
}
