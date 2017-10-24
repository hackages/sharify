// écrire une boucle qui va parcourir les chiffres de 0 à 100 (inclus)
// Si ce nombre est divisible par 3 afficher "fizz" dans la console
// Si ce nombre est divisible par 5 afficher "buzz" dans la console
// Si ce nombre est divisible par 3 et 5 afficher "fizz buzz" dans la console
// Sinon, afficher le nombre dans la console
function fizzBuzz(nombre){
  if(nombre % 15 === 0){
    return "Fizz buzz";
  } else if (nombre % 5 === 0){
    return "Buzz";
  } else if(nombre % 3 === 0){
    return "Fizz";
  } else {
    return nombre;
  }
}

for(let i = 0; i <= 100; i++){
  console.log(fizzBuzz(i));
}