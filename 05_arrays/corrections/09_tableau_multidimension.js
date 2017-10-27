/*
En utilisant le tableau multidimentionnel fourni ci-dessous,
creez une fonction qui permet d'écrire "je m'appelle *nom* et j'ai *age* ans"
*/

let ageOfStudents = 
[
    ["Marc", 22], 
    ["David", 32], 
    ["Antoine", 31]
]

function salutation(tableau){
    for(let i=0; i<tableau.length; i++){
        let nom = tableau[i][0];
        let age = tableau[i][1];
        console.log(`Je m'appelle ${nom} et j'ai ${age} ans`);
    }
}

salutation(ageOfStudents);