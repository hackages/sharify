let body = document.getElementById("body");

function ecrire(contenu, nbr, couleur){
    for(let i = 1; i <= nbr; i++){
        creerParagraphe(`${i}. ${contenu}`, couleur);    
    }
}

function creerParagraphe(contenu, couleur){
    var para = document.createElement("p");
    para.style.color = couleur;
    para.style.fontSize = "2em";
    var content = document.createTextNode(contenu);   
    para.appendChild(content);
    body.appendChild(para);
}

ecrire("Je suis une merde", 10, "red");
ecrire ("Je sais utiliser les boucles", 20, "yellow");