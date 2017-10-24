function pair(n){
  // Remplir cette fonction de façon à ce qu'elle retourne vrai si n est pair, faux si n est impaire
  // Pour ceci vous devrez utiliser l'opérateur modulo (%), jouez avec dans le REPL pour comprendre son fonctionnement (ex 3 % 2, 4 % 2)
  return n % 2 === 0;
}

console.log(pair(2));
console.log(pair(3));
console.log(pair(21));
console.log(pair(-4));
console.log(pair(-5));