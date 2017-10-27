/**
 * remplir la fonction ci-dessous
 * elle retourne vrai si l'élement qu'elle reçoit en premier paramètre est contenu dans le tableau qu'elle reçoit en second paramètre
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 */
function contient(element, array){
  return array.includes(element);
}

console.log(contient(2, [1, 2])); // true
console.log(contient(3, [1, 2])); // false
