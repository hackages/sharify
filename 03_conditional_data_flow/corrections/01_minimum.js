function minimum(a, b){
  if(a > b){
    return b;
  } else {
    return a;
  }
}

console.log(minimum(10, 42));
console.log(minimum(-5, -42));
console.log(minimum(-5, 0));

// Testez là sur (10, 42); (-5, -42); (-5, 0)