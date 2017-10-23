/**
 * Ouvrons à nouveau les livres de maths ....
 * Nous avons le carré suivant:
 * A---B
 * |  /
 * | /
 *  C
 *
 *  Tel que AB = 2cm et AC = 4cm
 *  Quelle est la longueur de BC?
 *  (rappel: AB^2 + AC^2 = BC^2)
 *  (Utilisez Math.sqrt() pour trouver la racine d'un nombre)
 *
 *  Math.sqrt(9) -> 3
 *
 *  1. Ecrire une fonction capable de retourner la longueur du troisième côté
 *
 *  2. Trouvez grâce à votre fonction la réponse aux questions suivantes:
 *  - AB = 5; AC = 10
 *  - AB = 2; AC = 10
 *  - AB = 59; AC = 32
 **/
function carre(nombre){
  return nombre * nombre;
}

function longueurHypotenuse(petitCote, grandCote){
  const resultat = carre(petitCote) + carre(grandCote);
  return Math.sqrt(resultat);
}

console.log(longueurHypotenuse(5, 10));
console.log(longueurHypotenuse(2, 10));
console.log(longueurHypotenuse(59, 32));
