# Variables et types de données
## Types de données (boolean, string, number, float,...)
### Introduction
En JavaScript (ou d'autres langages de programmations) il existe différents "types" de données, un ___mot___ ou une ___phrase___ est par exemple représenté par une ___"string"___ .
Un ___nombre entier___ est un ___"Integer"___ et finalement un ___nombre Décimal___ peut être représenté par un ___"float"___ .

### Les variables
Il est également possible de sauvegarder des valeurs grâces aux variables
On déclare une variable grâce au mot-clé "let" suivi du nom de la variable suivi de "=" suivi de la valeur.

```JavaScript
let nom = "Antonio";
```
Que nous pouvons découper en:
```JavaScript
let nom; // initialisation
nom = "Antonio"; // Assignation
```

Il est également possible de ré-assigner des valeurs à une variable:
```JavaScript
let nom = "Antonio";
nom = "Bob";
// Nom vaut maintenant "Bob"
```

### Nom d'une variable
Le nom d'une variable commence **toujours** par une lettre, il doit décrire ce que contient la variable. Contrairement à ce que nous pensons, quand nous écrivons du code, nous ne l'écrivons pas pour la machine mais pour que d'autres humains puissent le lire, il est donc important d'avoir des noms clairs
Par exemple:
```JavaScript
let p = "Bob"; // <-- Mauvais, on ne sait pas ce que représente p
let prenom = "Bob"; // Bonne façon de faire, prenom est explicite et sans réflechir on sait ce qu'il représente
```

En JavaScript la convention est d'utiliser ce qu'on appelle le camelCase pour nommer ses variables.

CamelCase dit que les noms de variables doivent commencer par une minuscule et que chaque nouveau mot est représenté par une majuscule.
```JavaScript
let prenomutilisateur; // Mauvais
let prenomUtilisateur; // Plus lisible, Bonne façon de faire
```

### Les différents opérateurs
#### + / - *
Il est possible d'utiliser entre les variables de type Integer tous les symboles mathématiques de base.

Pour ceci, il suffit de placer des valeurs à droite et à gauche tout comme en math

```JavaScript
console.log(2 + 4); // 6
let nombreA = 2;
let nombreB = 4;

let result = nombreA * nombreB; // 8

console.log(result / 2); // 4

let nombreC = 32;
nombreC = nombreC + 20;
console.log(nombreC); // 52
```

#### += *= /= -=
Il est possible grâce à certains opérateurs de directement ré-assigner des valeurs à des variables
Par exemple, si je veux ajouter 10 à une variable je peux le faire de la manière suivante:
```JavaScript
let nombreA = 10;
nombreA = nombreA + 20; // 30
// Simplifions en utilisant +=
nombreA += 30
console.log(nombre1) // 60
```

#### ++ --
Nous savons maintenant qu'il est possible de réduire le suivant: *myVariable = myVariable + 1* en *myVariable += 1*

Il est même possible de raccourcir encore plus cette écriture !

Grâce aux opérateurs ++ et -- il est possible "d'incrémenter" (augmenter de 1) et de "décrementer" (diminuer de 1) une variable.

Exemple:
```JavaScript
let nombre = 2;
nombre += 1; // nombre = 3
nombre++; // nombre = 4
nombre--; // nombre = 3
```

### Les constantes
Il existe une deuxième façon de stocker une valeur en JavaScript appellé les "constantes".
Une constante est une variable qui ne peut jamais être changée après qu'on lui ait assigné une valeur.

On utilise une constante quand on sait que sa valeur ne va jamais changer, par exemple: 
```JavaScript
let name = "Antonio"; // <-- Ceci peut changer
const secondsInAMinute = 60; // <-- Ceci ne va jamais changer
```

Par exemple:
```JavaScript
const maConstante = 2;
maConstante = 3; // ERROR
```


### Exercices
Ouvrez votre terminal et tapez la commande suivante: __node__
  - Faire des maths dans le REPL
  - Essayer d'ajouter deux strings ensembles
  - Assigner un entier à une variable
  - Assigner une string à une variable
  - Ajouter les deux ensemble, quel est le résultat?
  - Qu'est-ce qu'il arrive quand on essaye de diviser des entiers pour un résultat décimal 

