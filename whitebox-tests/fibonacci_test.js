import { expect } from "jsr:@std/expect";
import { fibonacci } from "./fibonacci.js";

Deno.test("test first Fibonacci number", () => {
  expect(fibonacci(0)).toBe(1);
});

Deno.test("test second Fibonacci number", () => {
  expect(fibonacci(1)).toBe(1);
});

// zusätzlicher Testfall: ungültiger Typ
Deno.test("test invalid type", () => {
  expect(fibonacci("abc")).toBeUndefined();
});

// zusätzlicher Testfall: negative Zahl
Deno.test("test negative number", () => {
  expect(fibonacci(-5)).toBeUndefined();
});

// zusätzlicher Testfall: Rekursion über default-Zweig
Deno.test("test fibonacci(2)", () => {
  expect(fibonacci(2)).toBe(2);
});

// zusätzlicher Testfall: ausführlichere Rekursion
Deno.test("test fibonacci(5)", () => {
  expect(fibonacci(5)).toBe(8);
});
