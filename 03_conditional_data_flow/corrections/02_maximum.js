// compléter la fonction ci-dessous de façon à ce qu'elle retourne le plus grand des deux nombres qu'on lui passe
function maximum(a, b){
  if(a < b){
    return b;
  } else {
    return a;
  }
}

console.log(maximum(42, 43));
console.log(maximum(-52, -32));

// Testez là sur (42, 43); (-52, 32);