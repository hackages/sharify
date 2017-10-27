/*
Créez un tableau multidimensionnel contenant le nom et le prénom de 4 personnes.
Utilisez ensuite une boucle qui permet d'afficher le nom suivi du prénom de chaque personne
*/

let personnes = 
[
    ["Fred", "Carbo"],
    ["Thomas", "Holland"],
    ["Davy", "Engone"]
]

for(let i=0; i<personnes.length; i++){
    let nom = personnes[i][0];
    let age = personnes[i][1];
    console.log(nom + " " +age);
}