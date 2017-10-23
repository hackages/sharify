let prenom = "Calapez";
let nom = "Antonio";

function swap(){
  const temp = prenom;
  prenom = nom;
  nom = temp;
}

swap();

console.log(prenom); // "Antonio"
console.log(nom); // "Calapez"
