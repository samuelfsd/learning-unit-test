const removeFlavor = require("./removeFlavor");

describe("Remove sabor da bebida", () => {
  it("Remover água", () => {
    const drinks = ["coke", "redbull", "whater", "lemonade"];
    expect(["redbull", "whater", "lemonade"]).toEqual(
      removeFlavor(drinks, "coke")
    );
  });

  it("Remover whater", () => {
    const drinks = ["coke", "redbull", "whater", "lemonade"];
    expect(["coke", "redbull", "lemonade"]).toEqual(
      removeFlavor(drinks, "whater")
    );
  });

  it("Remover groselha caso exista", () => {
    const drinks = ["coke", "redbull", "whater", "lemonade"];
    expect(removeFlavor(drinks, "lemonade")).toContain("coke");
  });
});
