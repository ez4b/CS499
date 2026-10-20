import { compareCities, printReport } from "./weather.js";

const cities = ["Paris", "Tokyo", "Cairo"];
// change these to any cities you like

try {
  console.log("City ranking (warmest first):");
  const reports = await compareCities(cities);

  if (reports.length === 0) {
    throw new Error("No city reports could be loaded.");
  }

  const warmest = reports[0];
  console.log("\nWarmest city:");
  printReport(warmest);

  // Bonus: 7-day forecast for the warmest city
  console.log(`\n7-day forecast for ${warmest.city}:`);
  const { time, temperature_2m_max, temperature_2m_min } = warmest.daily;
  for (let i = 0; i < time.length; i++) {
    console.log(`  ${time[i]}: ${temperature_2m_min[i]}–${temperature_2m_max[i]}°C`);
  }
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Trip report complete.");
}
