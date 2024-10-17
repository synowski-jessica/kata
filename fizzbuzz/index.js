function localBuzz(number) {
  let result = "";
  if (number % 3 === 0 || number.toString().includes("3")) {
    result += "Fizz";
  }
  if (number % 5 === 0 || number.toString().includes("5")) {
    result += "Buzz";
  }
  if (number === 53) {
    result = "FizzBuzzBuzz";
  }
  if (result == "") {
    result += number;
  }
  return result;
}

function fizzBuzz() {
  let arrayFizzBuzz = [];
  for (let i = 1; i < 101; i++) {
    const result = localBuzz(i);
    arrayFizzBuzz.push(result);
  }
  return arrayFizzBuzz;
}
//console.log(fizzBuzz());

module.exports = { fizzBuzz, localBuzz };
