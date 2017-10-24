//Récupération du div et changement du style
let div = document.getElementById("carre");
div.style = "height: 100px; width: 100px;";
div.style.display= "inline-block";
div.style.position = "fixed";

//assignation de la fonction à executer lors de l'appui sur une touche
window.onkeydown = move;

//assignation du chemins des images à différentes variables
let imgRight = "'nyan1.png'";
let imgLeft = "'nyan2.png'";

//variable pour stocker l'image actuelle
let currentImg = imgRight;

//initialisation des variables pour la position du nyan
let posX = 0;
let posY = 0;

//on initialise la position et l'image de début
setPosition(posX, posY);
setImage(currentImg);


//Tout ce que vous devez faire est: changer les valeurs de posX et posY en fonction de la
//touche appuyée
//Dans une premier temps, ecrivez la fonction avec des "if..else if...else if..."
//Pour finir, essayez de l'écrire avec un switch case
function move(event){
    let button = event.keyCode;
    console.log(button);


    //Creez un switch ici
    //button === 37 -> bouton fleche gauche
    //button === 38 -> bouton fleche haut
    //button === 39 -> bouton fleche droit
    //button === 40 -> bouton fleche bas

    setPosition(posX, posY);
    setImage(currentImg);
}

function setImage(image){
    div.style.backgroundImage = "url("+image+")";
    div.style.backgroundSize = "100px 100px";
}

function setPosition(x, y){
    div.style.left = x;
    div.style.top = y;
}