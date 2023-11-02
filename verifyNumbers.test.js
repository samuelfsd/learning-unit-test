const numbers = require("./verifyNumbers");

describe("Testa 1", () => {
  it("A função recebe [1,2,3,4,5] e retorna true", () => {
    expect(true).toEqual(numbers([1, 2, 3, 4, 5]));
  });
});

describe("Testa 2", () => {
  it("A função recebe [1,2,3,4,5] e retorna true", () => {
    expect(false).toEqual(numbers([1,'2', 3, 4, 5]));
  });
});

describe("Testa 3", () => {
  it("A função recebe [1,2,3,4,5] e retorna true", () => {
    expect(false).toEqual(numbers([" "]));
  });
});
