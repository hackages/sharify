/*
Creez un objet "personnage" et un objet "ennemi"
Ils doivent chacun contenir les propriétés suivantes:
-nom
-pointsDeVie
-force

Attention ! Les noms des propriétés doivent être identiques à ceux demandés
*/

let joueur;

let ennemi;

//Cette fonction est appellée lorsqu'on clique sur le bouton de droite
function attaquerJoueur(){

}

//Cette fonction est appellée lorsqu'on clique sur le bouton de gauche
function attaquerEnnemi(){

}

function attaque(attaquant, cible){
    //La fonction attaque doit déduire les points de vie de la cible.
    //L'attaquant peut être le joueur ou l'ennemi, et pareil pour la cible.
    //La déduction des points de vie doit se faire en fonction des dégats de l'attaquant
}

//Pour executer une animation, il suffit de faire "anim(joueur)" ou "anim(ennemi)"
//Selon le personnage










//Ne pas modifier
setInterval(() => {
    document.getElementById("hpPlayer").style.width = joueur.pointsDeVie + "%";
    document.getElementById("hpEnnemy").style.width = ennemi.pointsDeVie + "%";
}, 100)

//Ne pas modifier
function anim(perso) {
    
        let div;
        let animation;
    
        if(perso === joueur){
            div = document.getElementById("joueur");
            animation = 'animJoueur';
        }
        else if(perso === ennemi){
            div = document.getElementById("ennemi");
            animation = 'animEnnemi';
        }
    
    
    
        if (div.style.webkitAnimationName !== animation) 
        {
            div.style.webkitAnimationName = animation;
            div.style.webkitAnimationDuration = '0.6s';
    
            // make sure to reset the name after 4 seconds, otherwise another call to colorchange wont have any effect
            setTimeout(function() {
                div.style.webkitAnimationName = '';
            }, 600);
        }
    }