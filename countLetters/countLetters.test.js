import countLetters from "./countLetters";

it("returns empty object on empty string", () => {
  expect(countLetters("")).toStrictEqual({});
});

it("counts input chars", () => {
  expect(countLetters("aaabc")).toStrictEqual({
    a: 3,
    b: 1,
    c: 1,
  });
});

it("ignores non-latin letters", () => {
  expect(countLetters("1,.-* ")).toStrictEqual({});
});

it("counts uppercase letters as lower case chars", () => {
  expect(countLetters("aAAbC")).toStrictEqual({
    a: 3,
    b: 1,
    c: 1,
  });
});
