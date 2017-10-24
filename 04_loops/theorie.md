# Les boucles partie 1
## Introduction
En programmation, les boucles sont faites pour répeter une tâche jusqu'à ce qu'une condition soit remplie.

## La boucle for
Par exemple la boucle for, qui a la syntaxe suivante:
```
for(initialization; condition; incrementation){
    /**
    * Code à executer dans la boucle
    **/
}
```

Ce qui nous donne 
```JavaScript
for(let i = 0; i < 100; i++){
  console.log('Hello')
}
// Structure de notre boucle: 
// let i = 0 <-- Nous initialision une varible i avec la valeur 0
// i < 100 <-- tant que i est strictement plus petit que 100
// i++ <-- Ajouter un à i
```

## La boucle while
La boucle while fonctionne de la même manière que la boucle for, on crée une boucle, on initialise une valeur, on donne une condition et nous même on défini l'action à executer sur la variable qu'on a instantié


Elle se structure de la façon suivante (en pseudocode):
```
i = 0 <-- initialisation
TANT QUE i < 100 FAIRE: <-- condition
    LOG i <-- action
    i += 1 <-- incrémenter i pour sortir de la boucle après 100 fois
```

En JavaScript nous aurions le suivant:
```Javascript
let i = 0;
while(i < 100){
  console.log(i);
  i += 1;
}
```

### Exercices
Refaire les exos 03, 04 à l'aide d'une boucle while