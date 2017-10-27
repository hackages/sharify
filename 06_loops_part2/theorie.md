# Les boucles partie 2
## Introduction

On a vu un certain nombre de boucles dans le chapitre boucles partie 1.
Il faut savoir qu'il y en a d'autres, qui permettent de parcourir les tableaux, et qui nous facilitent bien la vie.

## for..in

```JavaScript
let array = ["Marc", "Greg", "Antonio"];

for(index in array)
{
    console.log(array[index]);
}
/*
Va afficher:
"Marc"
"Greg"
"Antonio"
*/
```

La structure de la boucle ___for in___ est la suivante: `for(index in tableau)` .
Elle va permettre de faire une itération pour chaque valeure présente dans le tableau qui se trouve après le mot clé ___in___ , et stocker l'index de l'itération courante dans la variable qui se trouve avant le mot clé ___in___
Voici ce que le même code donnerait avec la boucle for du précédent chapitre

```JavaScript
let array = ["Marc", "Greg", "Antonio"];

for(let i=0; i<array.length; i++)
{
    console.log(array[i]);
}
/*
Va afficher:
"Marc"
"Greg"
"Antonio"
*/
```

Le code ci-dessus va donner exactement le même résultat que le premier, mais est beaucoup plus long à écrire, et surtout beaucoup moins clair

## for..of

```JavaScript
let array = ["Marc", "Greg", "Antonio"];

for(item of array)
{
    console.log(index);
}
```

La structure de la boucle ___for of___ est la suivante: `for(valeur of tableau)` .
Elle va permettre de faire une itération pour chaque valeure présente dans le tableau qui se trouve après le mot clé ___of___, et stocker la valeur qui se trouve à l'index courant dans la varialbe qui se trouve avant le mot clé ___of___ .

La seule différence entre le ___for in___ et le ___for of___ est la valeur stockée. Dans le premier cas, c'est l'index, et dans le second cas, c'est la valeur. 