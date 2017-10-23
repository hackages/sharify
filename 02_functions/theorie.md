# Les fonctions
### Qu'est-ce qu'une fonction ?
Une fonction javascript est un block de code qui permet d'effectuer une ___tâche___ particulière. Ce block de code peut être appellé afin d'exécuter son contenu. L'intérêt des fonctions est de pouvoir créer un code ___réutilisable___ à plusieurs endroits différents.

Une fonction se construit grâce à plusieurs choses:
    - le mot-clé *function*
    - le nom de la function
    - des paranthèses suivi d'accolades

Ceci est donc le minimum requis pour créer une fonction
```JavaScript
function nomDeMaFunction(){

}
```

Ce qui se trouve à l'intérieur des **{ }** représente le corps de la fonction, le code qui va s'éxecuter quand on va l'appeler.

Créons donc avec ce que l'on sait une fonction qui affiche "Hello, world!" dans la console.
```JavaScript
function bonjour(){
    console.log('Hello, world!');
}
```

Nous pouvons ensuite utiliser notre fonction de la façon suivante:
```JavaScript
bonjour(); // <-- 'Hello, world!'
```

### Passer des paramètres à une fonction
Nous savons maintenant comment créer et utiliser une fonction mais jusqu'ici nous n'avons pas écrit de fonction très utile.

Il est possible de donner des informations à une fonction, des *paramètres*, pour qu'elle fasse des choses dessus.

Reprenons notre exemple de la fonction bonjour et transformons là de façon à pouvoir customiser le nom auquel elle dit bonjour

```JavaScript
function bonjour(nom){
    let message = 'Hello, ' + nom;
    console.log(message);
}
// Que nous pouvons ensuite utiliser de la manière suivante:
bonjour("Bob"); // <-- 'Hello, Bob'
bonjour("Richard"); // <-- 'Bonjour, Richard'
```

### Retourner des valeurs d'une fonction
Il est parfois utile de pouvoir "retourner" des valeurs depuis une fonction.
Jusqu'ici notre fonction ne nous ait pas très utile, elle affiche juste des messages dans la console...

Ecrivons ensemble une fonction qui prend deux nombres et les multiplie ensemble.

```JavaScript
function multiply(numberA, numberB){ // <-- On passe deux paramètres
    let result = numberA * numberB // <-- On multiplie et stock dans une variable
    return result // <-- On retourne le résultat à l'aide du mot-clé return
}

// Que l'on peut utilise de la manière suivante
let res = multiply(4, 5);
console.log(res); // <-- 4 * 5
``` 

### Paramètres par défaut
Il est possible de spécifier des valeurs par défaut pour vos paramètres comme suite

```JavaScript
function multiply(numberA, numberB = 1){
    return numberA * numberB;
}

let result = multiply(5);
console.log(result);
```

L'appel de la fonction ___multiply___ ci-dessus est correcte car le deuxième paramètre possède une valeur par défaut qui est 1.
Le fonction multiply va donc, dans ce cas, nous retourner 5.
A notre que le, ou les paramètres par défaut doivent toujours être placés à la fin.