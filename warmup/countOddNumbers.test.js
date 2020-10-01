import countOddNumbers from "./countOddNumbers";

describe("countOddNumbers", () => {
  it("works with 0", () => {
    const result = countOddNumbers(0);

    expect(result).toBe(0);
  });

  it("works with 1", () => {
    const result = countOddNumbers(1);

    expect(result).toBe(1);
  });

  it("works with 5", () => {
    const result = countOddNumbers(5);

    expect(result).toBe(3);
  });

  it("works with 6", () => {
    const result = countOddNumbers(6);

    expect(result).toBe(3);
  });
});
