/*
Ecrivez une fonction qui permet de d'additionner 3 nombres.
Testez ensuite votre fonction à l'aide de la fonction console.log sur les entrées suivantes:
  2, 4, 8
  -5, 32, -10
  0, 10, 2
*/
function add3Numbers(number1, number2, number3){
  let result = number1 + number2 + number3;
  return result;
}

let addition = add3Numbers(2, 4, 8);
console.log(addition);