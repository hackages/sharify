// Algorithme:
// 1.
// si on 21 ans ou plus elle renvoie "Bienvenu au casino Sharify" sinon elle renvoie "Sortez d'ici!"
// Si on a entre 18 et 21 ans exclus elle doit afficher "Vous ne pouvez pas jouer mais vous pouvez rentrer"
// Si on a moins de 18 ans elle nous demande de sortir
function casino(age){
  if(age < 0 || age > 110){
    return "Age invalide";
  }
  if(age < 18){
    return "Dégage!";
  }
  if(age >= 18 && age < 21){
    return "Vous ne pouvez pas jouer mais vous pouvez rentrer"
  }
  if(age >= 21){
    return "Bienvenu au casino Sharify"
  }
}

console.log(casino(18));
console.log(casino(16));
console.log(casino(22));
console.log(casino(-2));
console.log(casino(115));

// 2. Modifiez votre fonction pour vérifier que l'âge que l'on entre est valide (entre 0 et 110 ans) (vérifier ceci en une seule ligne
