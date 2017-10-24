// 1. écrivez une fonction qui écrit dans la console "Vrai!" si on lui passe en paramètre true, sinon elle ne fait rien
// 2. Changer votre fonction pour qu'elle affiche "Faux!!" dans la console si on lui passe faux
function truth(value){
  if(value){
    return "Vrai!";
  }
  return "Faux!";
}

console.log(truth(true));
console.log(truth(false));
console.log(truth(2 + 2 === 4));
console.log(truth(!false));
console.log(truth(!true));