import { test } from "node:test";
import assert from "node:assert/strict";
import { formatAmount } from "../src/price.js";

// v2: formátuje českým zápisem — nezlomitelná mezera jako oddělovač tisíců,
// desetinná čárka a symbol měny (viz komentář v src/price.js).
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
