import { test } from "node:test";
import assert from "node:assert/strict";
import { formatAmount } from "../src/price.js";

// v2 API (viz src/price.js): `formatPrice` → `formatAmount`, český formát —
// nezalomitelná mezera (U+00A0) jako oddělovač tisíců, desetinná čárka,
// symbol měny: 1234.5 → "1 234,50 Kč".

test("formátuje cenu v korunách", () => {
  assert.equal(formatAmount(1234.5), "1\u00a0234,50 Kč");
});

test("formátuje nulu", () => {
  assert.equal(formatAmount(0), "0,00 Kč");
});

test("formátuje eura", () => {
  assert.equal(formatAmount(99.9, "EUR"), "99,90 €");
});

test("skupinu i víceciferné tisíce", () => {
  assert.equal(formatAmount(1234567.89), "1\u00a0234\u00a0567,89 Kč");
});
