const solution = require("./solution");

describe("solution", () => {
  test("Example 1: All days present", () => {
    const input = {
      "2020-01-01": 4,
      "2020-01-02": 4,
      "2020-01-03": 6,
      "2020-01-04": 8,
      "2020-01-05": 2,
      "2020-01-06": -6,
      "2020-01-07": 2,
      "2020-01-08": -2,
    };
    const output = { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 };
    expect(solution(input)).toEqual(output);
  });

  test("Example 2: Missing days", () => {
    const input = { "2020-01-06": 10, "2020-01-10": 20 };
    const output = {
      Mon: 10,
      Tue: 15,
      Wed: 18,
      Thu: 19,
      Fri: 20,
      Sat: 15,
      Sun: 13,
    };
    expect(solution(input)).toEqual(output);
  });

  test("Minimal input: Only Mon and Sun", () => {
    const input = { "2020-01-05": 5, "2020-01-06": 15 }; // Sun, Mon
    const output = { Mon: 15, Tue: 10, Wed: 8, Thu: 7, Fri: 6, Sat: 6, Sun: 5 };
    expect(solution(input)).toEqual(output);
  });
});
