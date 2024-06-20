const removeFlavor = require("./removeFlavor");

const drinks = ["coca", "redBull", "água", "limonada" , "garapa" ];

describe("Remove sabor da bebida", () => {
  it("Remover água", () => {
    expect(drinks).toEqual(
      removeFlavor(drinks, "água")
    );
  });

  it("Remover garapa", () => {
    expect(drinks).toEqual(
      removeFlavor(drinks, "garapa")
    );
  });

  it("Remover groselha caso exista", () => {
    expect(removeFlavor(drinks, "limonada")).not.toContain("groselha");
  });
});
