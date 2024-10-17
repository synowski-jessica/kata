const array = [0, 2, 5, 3, 25, 36, 48, 84, 98];
function indexMagique(array) {
  for (let i = 1; i < array.length; i++) {
    if (array.indexOf(array[i]) === array[i]) {
      console.log(array[i]);
    }
  }
}
indexMagique(array);
