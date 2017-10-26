/**
 Il est possible d'inbriquer des boucles dans des boucles
 Utiliser ceci pour écrire fonction qui dessine un sapin dans la console
 Cette fonction prend un nombre qui déterminera la hauteur du sapin

 Par exemple pour sapin(4) dans la console nous aurons ceci:
 *
 * *
 * * *
 * * * *
 **/
function sapin(taille, signe){
    let branche = "";
    for(let i=0; i<=taille; i++){
        branche += signe;
        console.log(branche);
    }
}

sapin(4, "*");
