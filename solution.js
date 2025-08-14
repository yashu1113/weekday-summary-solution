function solution(D) {
  /* 
  Interpolation Strategy:
  1. For missing days, uses nearest ORIGINAL input days (not interpolated ones)
  2. This ensures symmetrical results when only two days are present
  */
  const daysOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const result = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
  const originalDays = new Set();

  // Process input
  for (const [dateStr, value] of Object.entries(D)) {
    const day = daysOrder[(new Date(dateStr).getDay() + 6) % 7];
    result[day] += value;
    originalDays.add(day);
  }

  // Interpolate missing days using original days only
  for (let i = 0; i < daysOrder.length; i++) {
    const day = daysOrder[i];
    if (!originalDays.has(day)) {
      // Linear search for nearest original days (forward/backward)
      let prev = (i - 1 + 7) % 7;
      let next = (i + 1) % 7;
      while (!originalDays.has(daysOrder[prev])) {
        prev = (prev - 1 + 7) % 7;
      }
      while (!originalDays.has(daysOrder[next])) {
        next = (next + 1) % 7;
      }
      result[day] = Math.round(
        (result[daysOrder[prev]] + result[daysOrder[next]]) / 2
      );
    }
  }

  return result;
}

// Manual Tests
console.log(
  "Test 1 (All days present):",
  solution({
    "2020-01-01": 4,
    "2020-01-02": 4,
    "2020-01-03": 6,
    "2020-01-04": 8,
    "2020-01-05": 2,
    "2020-01-06": -6,
    "2020-01-07": 2,
    "2020-01-08": -2,
  })
);

console.log(
  "\nTest 2 (Missing days):",
  solution({
    "2020-01-06": 10,
    "2020-01-10": 20, // Only Mon and Fri
  })
);

console.log(
  "\nTest 3 (Only Mon and Sun):",
  solution({
    "2020-01-05": 5,
    "2020-01-06": 15, // Sun and Mon
  })
);

console.log(
  "\nTest 4 (Single day input):",
  solution({
    "2020-01-06": 10, // Only Monday
  })
);
