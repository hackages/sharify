const numbers = [1, 2, 20, -2, 32, 12, 3, 65, 43, 23, 90];

/**
 * 
 * compléter la fonction ci-dessous pour qu'elle retourne la plus grande valeur du tableau
 */
function maximum(arr){
  let maximum = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > maximum){
      maximum = arr[i];
    }
  }
  return maximum;
}

console.log(maximum(numbers)); // Expected output: 90
