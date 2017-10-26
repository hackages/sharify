// 1. écrire la function repeat
//    Celle-ci prend une string et un nombre
//    Elle doit retourner une string contenant n fois l'ancienne (n étant le nombre reçu en paramètres)

function repeat(contenu, nombre){
    let resultat = "";
    for(i = 0; i<nombre; i++){
        resultat += contenu;
    }
    return resultat;
}

console.log(repeat("hello", 10));