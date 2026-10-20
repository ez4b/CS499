// Packing advice based on temperature in °C
export default function getPackingAdvice(tempC) {
  if (tempC < 5) return "Heavy coat";
  if (tempC < 20) return "Light jacket";
  return "T-shirt and sunscreen";
}
