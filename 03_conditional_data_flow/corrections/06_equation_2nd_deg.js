// Dans cet exercice sur le if/else if/else
// Complétez la fonction suivante pour qu'elle arrive à calculer des équations du second degré
// Rappel:
// https://www.mathematiquesfaciles.com/equation-second-degre_2_100601.htm
function carre(nombre){
  return nombre * nombre;
}

function delta(a, b, c){
  return carre(b) - 4 * (a * c);
}

function deltaPositif(a, b, delta){
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`x1 vaut ${x1} et x2 vaut ${x2}`);
}

function deltaNegatif(){
  console.log('Aucune solution possible');
}

function deltaNulle(a, b){
  const x = -b / 2 * a;
  console.log(`x vaut ${x}`);
}

function eq2ndDegre(a, b, c){
  const valeurDelta = delta(a, b, c);
  if(valeurDelta > 0){
    deltaPositif(a, b, valeurDelta);
  } else if (valeurDelta === 0){
    deltaNulle(a, b);
  } else if (valeurDelta < 0){
    deltaNegatif();
  }
  // Recevoir trois nombres en paramètres
  // Calculer la valeur de delta
  // Utiliser un IF/ELSE IF/ELSE qui appelle deltaPositif ou deltaNegatife ou DeltaNulle en fonction de la valeur de delta
  // Renvoyer la/les réponses possibles
}

eq2ndDegre(1, 4, 3);
eq2ndDegre(1, 3, -4);
eq2ndDegre(-5, 0, 0);
eq2ndDegre(1, 10, 30);

// Afficher dans la console les résultats des équations suivantes
// x²+4x+3=0
// x²+3x=4
// x²+2x=3
// x²+x-2=0
// x²-16=0
// x²=x
// x²=2x+3