const numbers = [1, 2, 20, -2, 32, 12, 3, 65, 43, 23, 90];

/**
 * 
 * compléter la fonction ci-dessous pour qu'elle retourne la moyenne de tous les éléments du tableau 
 */
function moyenne(arr){
  return numbers.reduce((acc, next) => acc + next, 0) / arr.length
}

console.log(moyenne(numbers)); // Expected output: 26.272727...
