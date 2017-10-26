//1.Pour commencer, creez un tableau contenant 5 noms

let noms = [
    "Davy",
    "Antonio",
    "Stephane",
    "Aurelie",
    "Marc"
]

//2.Utilisez ensuite une boucle pour écrire dans la console "Bonjour" suivi du nom qui se 
//trouve dans le tableau pour chaque nom

function bonjour(){
    for(let i = 0; i<noms.length; i++){
        console.log("bonjour " + noms[i]);
    }
}

bonjour();

//3.Une fois que c'est fait, encapsulez la boucle dans une fonction
//pour qu'on puisse passer n'importe quel tableau en paramètre

function bonjour2(tableau){
    for(let i = 0; i<tableau.length; i++){
        console.log("bonjour " + tableau[i]);
    }
}

bonjour2(noms);