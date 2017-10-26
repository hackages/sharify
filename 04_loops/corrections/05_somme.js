// écrire une fonction qui prend un minimum et un maximum, cette fonction va, à l'aide d'une boucle, compter la somme de tous les nombres entre ces deux nombres
// Ex:
// somme(2, 7); -> 2 + 3 + 4 + 5 + 6 + 7
function somme(minimum, maximum){
    let resultat = 0;
    for(let i = minimum; i<=maximum; i++){
        resultat += i;
        console.log(i);
    }

    return resultat;
}

console.log(somme(2, 7));