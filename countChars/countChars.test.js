import countChars from "./countChars";

it("returns empty object on empty string", () => {
  expect(countChars("")).toStrictEqual({});
});

it("counts input chars", () => {
  expect(countChars("aaabc")).toStrictEqual({
    a: 3,
    b: 1,
    c: 1,
  });
});

it("counts uppercase letters as lower case chars", () => {
  expect(countChars("aAAbC")).toStrictEqual({
    a: 3,
    b: 1,
    c: 1,
  });
});
