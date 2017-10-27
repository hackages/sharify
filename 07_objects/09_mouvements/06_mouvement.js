/*
Ajoutez maintenant une propriété "position" à joueur et à ennemi.
position est un objet qui lui même contient deux propriétés: "x" et "x".
les propriétés x et y correspondent à la position des personnages sur l'écran.
Assignez à ces propriétés divers valeurs et constatez que la position de départ des
deux personnages change.

Attention ! Les noms des propriétés doivent être identiques à ceux demandés
*/

let joueur = {
    nom: "Leo",
    pointsDeVie: 100,
    force: 10
}

let ennemi = {
    nom: "Gobelin",
    pointsDeVie: 100,
    force: 15
}

function handleInput(event){
    let button = event.keyCode;


    //cette fonction sera appellée à chaque touche de clavier
    //dans le navigateur.
    //La valeur qui se trouve dans la variable "button" sera
    //différente selon la touche qu'on pressse.

    //button === 37 -> bouton fleche gauche
    //button === 38 -> bouton fleche haut
    //button === 39 -> bouton fleche droit
    //button === 40 -> bouton fleche bas

    //Selon la touche appuyée, changez la position du joueur en
    //modifiant ses propriétés

}













//Ne pas modifier a partir d'ici
window.onkeydown = handleInput;

let parentJoueur = document.getElementById("playerParent");
let parentEnnemi = document.getElementById("ennemyParent");
let divJoueur = document.getElementById("joueur");
let divEnnemi = document.getElementById("ennemi"); 

setInterval(() => {
    document.getElementById("hpPlayer").style.width = joueur.pointsDeVie + "%";
    document.getElementById("hpEnnemy").style.width = ennemi.pointsDeVie + "%";
    parentJoueur.style.top = joueur.position.y;
    parentJoueur.style.left = joueur.position.x;
    parentEnnemi.style.top = ennemi.position.y;
    parentEnnemi.style.left = ennemi.position.x;
}, 50)

function anim(perso) {

    let div;
    let animation;

    if(perso === joueur){
        div = divJoueur;
        animation = 'animJoueur';
    }
    else if(perso === ennemi){
        div = divEnnemi;
        animation = 'animEnnemi';
    }



    if (div.style.animationName !== animation) 
    {
        div.style.animationName = animation;
        div.style.animationDuration = '0.6s';

        // make sure to reset the name after 4 seconds, otherwise another call to colorchange wont have any effect
        setTimeout(function() {
            div.style.animationName = '';
        }, 600);
    }
}