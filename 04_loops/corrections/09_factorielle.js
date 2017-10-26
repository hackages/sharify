// remplir la fonction ci-dessous de façon à ce qu'elle puisse calculer la factorielle de n'importe quel nombre:
function factorielle(n){
    let resultat = 1;
    for(let i=1; i<=n; i++){
        resultat *= i;
    }
    return resultat;
}

console.log(factorielle(2)); // 2 (1 * 2)
console.log(factorielle(3)); // 6 (1 * 2 * 3)
console.log(factorielle(4)); // 24 (1 * 2 * 3 * 4)

