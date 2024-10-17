// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumbers(l1, l2) {
  let L1Reverse = parseInt(l1.reverse().join(""));
  let L2Reverse = parseInt(l2.reverse().join(""));
  let sumLign = (L1Reverse + L2Reverse).toString().split("").reverse();
  for (let i = 0; i < sumLign.length; i++) {
    sumLign[i] = parseInt(sumLign[i]);
  }
  return sumLign;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
