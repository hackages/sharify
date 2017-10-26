let body = document.getElementById("body");

function ecrire(){
//Pour ecrire une ligne, il faut appeller la fonction "creerParagraphe" en lui passant
//en paramètre le texte à afficher et la couleur du texte en anglais.
}

//Le contenu à afficher, le nombre de fois qu'il faut l'afficher, et la couleur dans laquelle l'afficher
ecrire ("Je sais utiliser les boucles", 20, "yellow");




creerParagraphe("je suis Said", "red");
















//Ne pas modifier. Juste appeller pour écrire une ligne en passant contenu et couleur
function creerParagraphe(contenu, couleur){
    var para = document.createElement("p");
    para.style.color = couleur;
    para.style.fontSize = "2em";
    var content = document.createTextNode(contenu);   
    para.appendChild(content);
    body.appendChild(para);
}