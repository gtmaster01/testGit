// Formátování ceny pro UI.
//
// v2: `formatPrice` se přejmenovala na `formatAmount` a formát se změnil
// na český zápis — mezera jako oddělovač tisíců (nezlomitelná), desetinná
// čárka a symbol měny: 1234.5 → "1 234,50 Kč".
const SYMBOLS = { CZK: "Kč", EUR: "€" };

export function formatAmount(amount, currency = "CZK") {
  const [int, dec] = amount.toFixed(2).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${grouped},${dec} ${SYMBOLS[currency] ?? currency}`;
}
