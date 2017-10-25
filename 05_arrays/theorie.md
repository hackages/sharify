# Les tableaux (arrays)

Jusqu'à présent, on ne stockait qu'une seule valeur par variable, mais il faut savoir qu'il est possible de stocker plusieurs valeurs en utilisant les arrays.

```JavaScript
//Au lieu d'écrire ceci
let student1 = "Marc";
let student2 = "David";
let student3 = "Antoine";

//On peut faire ça
let students = 
[ //<-- Ouverture de crochet
    "Marc", //<- Les éléments du tableau sont séparé par une virgule
    "David", 
    "Antoine"
]; //<-- Fermeture du crochet
```

On peut ensuite accéder aux différentes valeurs comme ceci:

```JavaScript
//Ceci renverra "Marc"
console.log(students[0]);
//Ceci renverra "David"
console.log(students[1]);
//Ceci renverra "Antoine"
console.log(students[2]);
```

Pour accéder à une valeur du tableau, la structure est la suivante: `nomTableau[index]`. L'index est un number qui représente la position d'un élément dans un tableau. La numérotation commence à ___0___ .

Cette façon d'écrire va nous permettre de parcourir très facilement les tableaux à l'aide des boucles, en utilisant une propriété que possède les tableaux: ___length___ .

`nomTableau.length` retourne la longueur actuelle du tableau. On peut utiliser cette propriété comme ceci.

```JavaScript
let students = ["Marc", "David", "Antoine"];

for(let i=0; i<students.length; i++)
{
    let currentStudent = student[i];
    console.log(currentStudent);
}
```

Il est possible de modifier un tableau en y ajoutant des valeurs:

```JavaScript
let students = ["Marc"];
students.push("David");
//student ressemble maintenant à ceci: ["Marc", "David"]
```

Il est également possible de retirer une valeur:
```JavaScript
let students = ["Marc", "David"];
//surppime le dernier élément du tableau
students.pop();

//si on souhaite retirer un élément spécifique du tableau:
students.splice(0, 1)
```

Dans la fonction ___splice___:
- le premire paramètre correspond à l'index de début de la partie à supprimer
- le deuxièmre paramètre correspond à l'index de fin de la partie qu'on souhaite supprimer

Si on ne connait pas l'index de la valeur à supprimer, on peut faire ceci:

```JavaScript
let students = ["Marc", "David"];
//indexOf va retourner un number correspondant à l'index de David
let indexToDelete = students.indexOf("David")

students.splice(indexToDelete, 1);
```

Il est églament possible de créer des tableaux multidimentionnels:

```JavaScript
let ageOfStudents = 
[
    ["Marc", 22], 
    ["David", 32], 
    ["Antoine", 31]
]
```