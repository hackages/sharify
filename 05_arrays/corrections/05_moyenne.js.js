const numbers = [1, 2, 20, -2, 32, 12, 3, 65, 43, 23, 90];

/**
 * 
 * compléter la fonction ci-dessous pour qu'elle retourne la moyenne de tous les éléments du tableau 
 */
function moyenne(arr){
  let resultat = 0;
  for(let i = 0; i<arr.length; i++){
    resultat += arr[i];
  }
  return resultat / arr.length;
}

console.log(moyenne(numbers)); // Expected output: 26.272727...
