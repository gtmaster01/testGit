import { test } from "node:test";
import assert from "node:assert/strict";
import { formatAmount } from "../src/price.js";

// v2 aplikace formátuje českým zápisem (viz komentář v src/price.js):
// nerezlitelná mezera (U+00A0) jako oddělovač tisíců, desetinná čárka
// a symbol měny. Pro porovnání proto explicitně používáme "\u00A0".
const NBSP = "\u00A0";

test("formátuje cenu v korunách", () => {
  assert.equal(formatAmount(1234.5), `1${NBSP}234,50 Kč`);
});

test("formátuje nulu", () => {
  assert.equal(formatAmount(0), "0,00 Kč");
});

test("formátuje eura", () => {
  assert.equal(formatAmount(99.9, "EUR"), "99,90 €");
});

test("oddělovač tisíců použije u vyšší částky na každou trojici", () => {
  assert.equal(formatAmount(1234567.89), `1${NBSP}234${NBSP}567,89 Kč`);
});

test("neznámou měnu vypíše jako kód měny", () => {
  assert.equal(formatAmount(5, "USD"), "5,00 USD");
});
