const numbers = [1, 2, 20, -2, 32, 12, 3, 65, 43, 23, 90];

/**
 * 
 * compléter la fonction ci-dessous pour qu'elle retourne la somme totale de tous les éléments du tableau 
 */
function sum(arr){
    let result = 0;

    for(let i=0; i<arr.length; i++)
    {
        result += arr[i];
    }

    return result;
}

console.log(sum(numbers)); // Expected output: 289
