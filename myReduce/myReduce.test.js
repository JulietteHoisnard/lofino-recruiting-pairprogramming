import myReduce from "./myReduce";

it("returns seed on empty input", () => {
  const result = myReduce([], () => undefined, 5);

  expect(result).toBe(5);
});

it("works with string concatination", () => {
  const result = myReduce(
    ["H", "e", "l", "l", "o", " ", "World"],
    (acc, current) => acc + current,
    ""
  );

  expect(result).toBe("Hello World");
});

it("works with multiplication", () => {
  const result = myReduce([1, 2, 3], (acc, current) => acc * current, 1);

  expect(result).toBe(6);
});
