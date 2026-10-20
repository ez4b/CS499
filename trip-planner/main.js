import { toFahrenheit, toMph, round } from "./convert.js";
import getPackingAdvice from "./advice.js";
import { checkInWithRetry } from "./flight.js";

// PART 1 — Modules test
console.log(toFahrenheit(20), round(toMph(10)), getPackingAdvice(12));
// Expected: 68 6.2 Light jacket

// PART 3 — async/await test
async function testCheckIn(chance) {
  try {
    await checkInWithRetry("Ana", 3, chance);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("Check-in closed.");
  }
}

await testCheckIn(100);
await testCheckIn(0);
