//fonction qui récupère le code réseau contenu dans le serial Number
function recupererCodeReseau(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].substr(0, 8));
  }
  return newArray;
}

const codeReseau = recupererCodeReseau([
  "02080008000100005",
  "02080008000100006",
  "02090008000100008",
  "02090009000100012",
]);

//fonction qui supprime les doublons du tableau de code réseau
// function supprimerDoublonCodeReseau(array) {
//   return [...new Set(array)];
// }

function supprimerDoublonCodeReseau(array) {
  let arraySansDoublon = [];
  for (let i = 0; i < array.length; i++) {
    if (!arraySansDoublon.includes(array[i])) {
      arraySansDoublon.push(array[i]);
    }
  }
  return arraySansDoublon;
}

const codeReseauSansDoublon = supprimerDoublonCodeReseau(codeReseau);
console.log(codeReseauSansDoublon);
