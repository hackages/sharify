// compléter les fonctions ci-dessous pour pouvoir faire des calculs
// la seule opération que vous pouvez utiliser est le +
function add(a, b){
    return a+b;
}

function multiply(a, b){
    let resultat = 0;
    for(let i=1; i<=b; i++){
        resultat = add(resultat, a);
    }
    return resultat;
}

console.log(add(3, 5)); // 8
console.log(multiply(2, 6)); // 10
