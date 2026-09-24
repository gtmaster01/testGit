import { test } from "node:test";
import assert from "node:assert/strict";
import { formatAmount } from "../src/price.js";

// v2 API: `formatPrice` se přejmenovala na `formatAmount` a formát je český:
// nezlomitelná mezera (U+00A0) jako oddělovač tisíců, desetinná čárka a
// symbol měny — viz komentář v src/price.js. Oddělovač tisíců je proto
// v očekávaných řetězcích zapsán explicitně jako "\u00a0".
test("formátuje cenu v korunách", () => {
  assert.equal(formatAmount(1234.5), "1\u00a0234,50 Kč");
});

test("formátuje nulu", () => {
  assert.equal(formatAmount(0), "0,00 Kč");
});

test("formátuje eura", () => {
  assert.equal(formatAmount(99.9, "EUR"), "99,90 €");
});
