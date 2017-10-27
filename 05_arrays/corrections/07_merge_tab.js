/*
Ecrivez une fonction qui prend en paramètre 2 tableaux de nombres.
La fonction devra fusionner ces deux tableaux en un seul

Exemple:
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 
console.log(mergeArrays(array1, array2));
[3, 2, 30, 1]
*/

const tab1 = [1, 10, 8, 8, "Hello", false];
const tab2 = [2, 10, "Hello", "Bonjour", false, true];

function mergeArrays(array1, array2){
  let resultat = [];
  for(let i = 0; i<array1.length; i++){
    const tempElement = array1[i];
    if(!resultat.includes(tempElement)){
      resultat.push(tempElement)
    }
  }

  for(let i = 0; i<array2.length; i++){
    const tempElement = array2[i];
    if(!resultat.includes(tempElement)){
      resultat.push(tempElement)
    }
  }
  return resultat;
}


/**
 * 2. Modifiez votre fonction pour qu'elle n'ajoute pas les duplicats
 */
const res = mergeArrays(tab1, tab2);
console.log(res);