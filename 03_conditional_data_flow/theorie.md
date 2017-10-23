# Dataflow conditionnel
En programmation, il est possible d'éxecuter des actions seulement quand une condition est respectée

Ceci ce fait à l'aide de différents opérateurs spéciaux
## If
If, ou si, permet de n'éxecuter du code que quand une condition est rencontrée
Il existe différent types de conditions
### Sur les valeurs dites "truthy"
```JavaScript
if(true){
  // Bloc de code executé quand c'est vrai
}
```
### égalité
```JavaScript
if(2 === 1 + 1){
  // Bloc de code executé quand c'est vrai
}
```
### non-égal
```JavaScript
if(2 !== 3){
 // Bloc de code executé quand c'est vrai 
}
```

### plus petit que
```JavaScript
if(2 < 3){
  // Bloc de code executé quand c'est vrai
}
```
#### Plus petit ou égal que
```JavaScript
let a = 5;
if(a <= 5){
  // s'éxecutera
}
if(a < 5){
  // ne s'éxecutera pas
}
```
### plus grand que
```JavaScript
if(5 > 4){
  // Bloc de code executé quand c'est vrai
}
```
#### Plus grand ou égal que
```JavaScript
let a = 5;
if(a >= 5){
  // s'éxecutera
}

let a = 5;
if(a >= 5){
  // ne s'éxecutera pas
}
```
### inverse
```JavaScript
if(!false){
  // Bloc de code executé quand c'est vrai
}
```

### Et
Il est égalemenet possible d'éxecuter du code *seulement* si *deux* conditions sont rencontrées
```JavaScript
if(true && 2 === 1 + 1){
// Bloc de code executé quand c'est vrai
}
```
### Ou
On peut aussi vérifier que seul une des conditions est vraie
```JavaScript
if(false || 1 === 2 - 1){
 // Bloc de code executé quand c'est vrai 
}
```

Continuer après les exercices 1 à 3

## If Else
Grâce au mot clé else on peut éxecuter du code quand la condition n'est pas rencontrée
Par exemple:
```JavaScript
function estMajeur(age){
 if(age > 18) {
   return yes;
 } else {
   return false;
 }
}

console.log(estMajeur(20)); // true
console.log(estMajeur(16)); // false
```
## If Else if 
Il est également possible dans un if de vérifier plusieurs conditions
Exemple:
```JavaScript
function estPositif(nombre){
    if(nombre === 0){
      return true
    } else if (nombre > 0){
      return true
    } else {
      return false
    }
}
```

Résoudre les exercices 4 à 7 avant de continuer
## Switch
Le switch permet comme le if/else if de tester plusieurs conditions.
Par exemple: nous pourrions écrire le code suivant:
```JavaScript
let nombre = 52;
let message;
switch(nombre){
  case 10:
      message = "Votre nombre vaut 10!";
      break;
  case 42:
      message = "Votre message répond à beaucoup de questions...";
      break;
  default:
      message = "Mmmm....";
}
console.log(message); // <-- "Mmmm...."
```
Cassons le en petites parties...

```JavaScript
let n = 10;
switch(n){ // <-- La valeur sur laquelle il doit faire des tests (ici 10)
  case (n < 5): // <-- Premier test à effectuer
    /**
    * Code à exécuter si la condition est remplie
    **/
    break; // Important sinon votre code continue jusqu'au prochain case et l'exécute
  case (n === 10):
    /**
    * Code si n vaut 10
    **/
    break;
  default:
    /**
    * Code à exécuter si aucune des conditions n'est remplie
    **/
}
```

Pour vous exercez, ré-écrivez les exercices 4 à 6 sans utiliser de If