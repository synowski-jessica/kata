const app = require("../index");

describe("leapYear", () => {
  it("si mon année est divisible par 400, alors c'est une année bissextile", () => {
    expect(app.leapYear(2000)).toEqual(true);
  });

  it("si mon année n'est pas divisible par 400, alors ce n'est pas une année bissextile", () => {
    expect(app.leapYear(1989)).toEqual(false);
  });

  it("Toutes les années divisibles par 100 mais pas par 400 ne sont PAS des années bissextiles", () => {
    expect(app.leapYear(1700)).toEqual(false);
  });

  it("Toutes les années divisibles par 4 mais pas par 100 SONT des années bissextiles", () => {
    expect(app.leapYear(2008)).toEqual(true);
  });

  it("Toutes les années non divisibles par 4 ne sont PAS des années bissextiles", () => {
    expect(app.leapYear(2017)).toEqual(false);
  });
});
