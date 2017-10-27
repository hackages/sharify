
/*
Ecrivez une fonction qui retourne la valeur qui a le plus d'occurence dans un tableau
utilisez les tableaux qui vous sont fournis
*/

let tab1 = [1, 4, 5, 4, 1, 4, 3, 1, 4, 3, 5, 1, 1, 1, 4, 3, 5, 2, 4, 3, 4, 3, 1, 2, 3, 4, 5];
let tab2 = [1, 5, 5, 4, 5, 4, 3, 1, 4, 3, 5, 5, 1, 5, 4, 3, 5, 5, 4, 3, 4, 3, 1, 2, 3, 4, 5];


function occurences(tab){
    let occMax = 0;
    let occItem = 0;
    for(let i=0; i<tab.length; i++){
        let occ2 = 0;
        for(let j=0; j<tab.length; j++){

            if(tab[i]===tab[j])
            {
                occ2 += 1;
            }
            if(occ2 > occMax){
                occMax = occ2;
                occItem = tab[i];
            }
        }
    }
    return occItem;
}

console.log(occurences(tab1));