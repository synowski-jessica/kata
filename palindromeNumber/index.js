function isPalindrome(string) {
  const stringToArray = parseInt(string.split("").reverse().join(""));
  if (stringToArray === parseInt(string)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("121"));
console.log(isPalindrome("-121"));
