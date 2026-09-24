import { test } from "node:test";
import assert from "node:assert/strict";
import { formatAmount } from "../src/price.js";

// v2: `formatPrice` → `formatAmount`, formát je český zápis —
// nezlomitelná mezera (U+00A0) jako oddělovač tisíců, desetinná čárka,
// symbol měny. Očekávané hodnoty proto používají "\u00A0" místo mezery
// a čárku místo tečky.
test("formátuje cenu v korunách", () => {
  assert.equal(formatAmount(1234.5), "1\u00A0234,50 Kč");
});

test("formátuje nulu", () => {
  assert.equal(formatAmount(0), "0,00 Kč");
});

test("formátuje eura", () => {
  assert.equal(formatAmount(99.9, "EUR"), "99,90 €");
});

test("neznámá měna spadne na kód měny", () => {
  assert.equal(formatAmount(1234.5, "USD"), "1\u00A0234,50 USD");
});

test("skupiny tisíců u větších částek", () => {
  assert.equal(formatAmount(1234567.89), "1\u00A0234\u00A0567,89 Kč");
});
