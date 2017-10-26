const numbers = [1, 2, 20, -2, 32, 12, 3, 65, 43, 23, 90];

/**
 * 
 * compléter la fonction ci-dessous pour qu'elle retourne la plus petite valeur du tableau
 */
function minimum(arr){
    let resultat = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < resultat){
            resultat = arr[i];
        }
    }
    return resultat;
}

console.log(minimum(numbers)); // Expected output: -2
