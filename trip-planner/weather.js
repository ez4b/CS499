import { GEO_URL, FORECAST_URL } from "./config.js";
import { toFahrenheit, toMph, round } from "./convert.js";
import getPackingAdvice from "./advice.js";
import { fileURLToPath } from "url";

// 1. City name → coordinates
export async function getCoordinates(city) {
  const response = await fetch(`${GEO_URL}?name=${encodeURIComponent(city)}&count=1`);
  if (!response.ok) {
    throw new Error(`Geocoding request failed with status ${response.status}`);
  }
  const data = await response.json();
  if (!data.results) {
    throw new Error(`City not found: ${city}`);
  }
  const { name, country, latitude, longitude } = data.results[0];
  return { name, country, latitude, longitude };
}

// 2. Sequential: coordinates first, then the forecast
export async function getTripReport(city) {
  const { name, country, latitude, longitude } = await getCoordinates(city);
  const url =
    `${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,wind_speed_10m` +
    `&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Forecast request failed with status ${response.status}`);
  }
  const data = await response.json();

  return {
    city: name,
    country,
    tempC: data.current.temperature_2m,
    windKmh: data.current.wind_speed_10m,
    maxC: data.daily.temperature_2m_max[0],
    minC: data.daily.temperature_2m_min[0],
    daily: data.daily, // full 7-day arrays (used for the bonus in trip.js)
  };
}

// 3. One-line report
export function printReport(report) {
  const { city, country, tempC, windKmh, maxC, minC } = report;
  console.log(
    `${city}, ${country} | ${round(tempC)}°C (${round(toFahrenheit(tempC))}°F) | ` +
      `Wind ${round(windKmh)} km/h (${round(toMph(windKmh))} mph) | ` +
      `Today: ${Math.round(minC)}–${Math.round(maxC)}°C | ${getPackingAdvice(tempC)}`
  );
}

// 4. Parallel: all reports at once, warmest first.
// One bad city is skipped instead of rejecting the whole Promise.all.
export async function compareCities(cities) {
  const results = await Promise.all(
    cities.map(async (city) => {
      try {
        return await getTripReport(city);
      } catch (err) {
        console.log(`Skipping ${city}: ${err.message}`);
        return null;
      }
    })
  );

  const reports = results.filter((r) => r !== null);
  reports.sort((a, b) => b.tempC - a.tempC);

  reports.forEach((r, i) => console.log(`${i + 1}. ${r.city} ${round(r.tempC)}°C`));
  return reports;
}

// ---- Tests (only run when this file is executed directly) -------------------
if (fileURLToPath(import.meta.url).toLowerCase() === process.argv[1]?.toLowerCase()) {
  try {
    printReport(await getTripReport("Evansville"));
    console.log();
    await compareCities(["Oslo", "Cairo", "Lima", "Atlantisville"]);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
