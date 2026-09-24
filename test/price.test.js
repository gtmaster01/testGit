import { test } from "node:test";
import assert from "node:assert/strict";
import { formatPrice } from "../src/price.js";

test("formátuje cenu v korunách", () => {
  assert.equal(formatPrice(1234.5), "1234.50 CZK");
});

test("formátuje nulu", () => {
  assert.equal(formatPrice(0), "0.00 CZK");
});

test("formátuje eura", () => {
  assert.equal(formatPrice(99.9, "EUR"), "99.90 EUR");
});
