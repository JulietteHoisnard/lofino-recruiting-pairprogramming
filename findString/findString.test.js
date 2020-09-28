import { findString } from "./findString";

it("returns empty array on empty input", () => {
  const result = findString({}, "");

  expect(result).toStrictEqual([]);
});

it("finds string in person email", () => {
  const input = {
    people: [
      {
        email: "foo@bar.com",
      },
      {
        email: "fizz@buzz.com",
      },
    ],
  };

  const result = findString(input, "foo");

  expect(result).toStrictEqual(["foo@bar.com"]);
});

it("finds string in plain place addresses", () => {
  const input = {
    places: [
      {
        address: "bar avenue 5",
      },
      {
        address: "foo street 123",
      },
    ],
  };

  const result = findString(input, "foo");

  expect(result).toStrictEqual(["foo street 123"]);
});

it("finds string in plain address objects", () => {
  const input = {
    places: [
      {
        address: "bar avenue 5",
      },
      {
        address: {
          street: "foo street",
          country: "Germany",
          city: "Berlin",
        },
      },
    ],
  };

  const result = findString(input, "foo");

  expect(result).toStrictEqual(["foo street"]);
});

it("finds string in book title", () => {
  const input = {
    books: [
      {
        title: "The Catcher in the Foo",
        author: "J.D. Salinger",
      },
    ],
  };

  const result = findString(input, "foo");

  expect(result).toStrictEqual(["The Catcher in the Foo"]);
});

it("finds string in book author", () => {
  const input = {
    books: [
      {
        title: "The Catcher in the Rye",
        author: "J.D. Foolinger",
      },
    ],
  };

  const result = findString(input, "foo");

  expect(result).toStrictEqual(["J.D. Foolinger"]);
});
