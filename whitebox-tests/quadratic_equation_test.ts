import { expect } from "jsr:@std/expect";
import { solve } from "./quadratic_equation.ts";

// d > 0 → zwei Lösungen
Deno.test("quadratic: two solutions when d > 0", () => {
  const result = solve(1, 5, 1); // d = 21 > 0
  expect(result.length).toBe(2);
});

// d = 0 → eine Lösung
Deno.test("quadratic: one solution when d = 0", () => {
  const result = solve(1, 2, 1); // d = 0
  expect(result).toEqual([-1]);
});

// d < 0 → keine Lösung
Deno.test("quadratic: no solution when d < 0", () => {
  const result = solve(1, 0, 1); // d = -4
  expect(result).toEqual([]);
});
