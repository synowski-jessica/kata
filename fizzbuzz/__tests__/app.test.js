const app = require("../index");

// describe("fizzbuzz", () => {
//   // it("devrait retourner 100 itérations", () => {
//   //   let result = app.fizzBuzz();
//   //   expect(result.length).toEqual(100);
//   // });
// });

describe("localBuzz", () => {
  it("le chiffre 3 doit me retourner Fizz", () => {
    expect(app.localBuzz(3)).toContain("Fizz");
  });

  it("le chiffre 5 doit me retourner Buzz", () => {
    expect(app.localBuzz(5)).toContain("Buzz");
  });
});
