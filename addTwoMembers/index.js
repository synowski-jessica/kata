// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumbers(array1, array2) {
  let array1Reverse = parseInt(array1.reverse().join(""));
  let array2Reverse = parseInt(array2.reverse().join(""));
  let sumTwoArrays = (array1Reverse + array2Reverse)
    .toString()
    .split("")
    .reverse();
  for (let i = 0; i < sumTwoArrays.length; i++) {
    sumTwoArrays[i] = parseInt(sumTwoArrays[i]);
  }
  return sumTwoArrays;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
