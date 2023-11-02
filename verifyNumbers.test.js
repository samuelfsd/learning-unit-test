const numbers = require("./verifyNumbers");

describe("Testa a função numbers", () => {
  it("A função recebe [1,2,3,4,5] e retorna true", () => {
    expect(true).toEqual(numbers([1, 2, 3, 4, 5]));
  });
});
