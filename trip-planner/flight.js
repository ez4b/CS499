import { fileURLToPath } from "url";
// PART 2 — Promises

// Resolves (with no value) after ms milliseconds
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Waits 1 second, then resolves or rejects based on successChance (0–100)
export function checkIn(name, successChance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 100 < successChance) {
        resolve(`${name} is checked in.`);
      } else {
        reject("Check-in failed: server busy.");
      }
    }, 1000);
  });
}

// PART 3 — async/await
export async function checkInWithRetry(name, maxTries, chance) {
  for (let i = 1; i <= maxTries; i++) {
    try {
      const message = await checkIn(name, chance);
      console.log(message);
      return;
    } catch (err) {
      console.log(`Try ${i} failed: ${err}`);
      await delay(500);
    }
  }
  throw new Error(`Could not check in ${name} after ${maxTries} tries`);
}

// ---- Part 2 tests (only run when this file is executed directly) ------------
if (fileURLToPath(import.meta.url).toLowerCase() === process.argv[1]?.toLowerCase()) {
  // .then / .catch / .finally
  checkIn("Ana", 100)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))
    .finally(() => console.log("Check-in closed."));

  checkIn("Ana", 0)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))
    .finally(() => console.log("Check-in closed."));

  // Promise chain with delay (starts after the check-ins finish)
  delay(1500)
    .then(() => {
      console.log("Gate opens");
      return delay(1000);
    })
    .then(() => {
      console.log("Boarding");
      return delay(1000);
    })
    .then(() => console.log("Takeoff!"));
}
