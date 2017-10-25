let body = document.getElementById("body");

function ecrire(){

}

ecrire ("Je sais utiliser les boucles", 20, "yellow");






















//Ne pas modifier. Juste appeller pour écrire une ligne en passant contenu et couleur
function creerParagraphe(contenu, couleur){
    var para = document.createElement("p");
    para.style.color = couleur;
    para.style.fontSize = "2em";
    var content = document.createTextNode(contenu);   
    para.appendChild(content);
    body.appendChild(para);
}