# Les objets
## Introduction

Les objets sont des conteneurs qui peuvent contenir des variables et des fonctions.
Des variables au sein d'un objet sont appelés les propriétés de cet objet.

Nous pouvons déclarer un objet voiture contenant des propriétés comme ceci.

```JavaScript
let car = {};
car.make = "Bmw";
car.model = "320d";
car.maxSpeed = "220km/h";
};
```

Ou encore plus simplement comme ceci

```JavaScript
let car = 
{
    make: "Bmw",
    model: "320d",
    maxSpeed: "220km/h",
};
```

Comme vous pouvez le constater, pour créer un objet, on utilise les accolades "{}"
contrairement aux tableaux où on utilise les crochets "[]"

Autre chose à notre, lorsqu'on déclare des propriétés ___dans des accolades___, le propriété et la valeur sont séparéss par les doubles points ":" au lieu du égal.

On peut ensuite accéder aux propriétés d'un objet comme ceci:

```JavaScript
car.model;
//Ou on peut même modifier la propriété
car.model = "520d"
//le model est maintenant 520d au lieu de 320d
```

On peut dire que les objets sont des variables qui contiennent des "sous variables".

## Nesting d'objets

Le fait de __"nester"__ un objet dans un autre signifie référencer un objet dans un autre objet. Exemple:

```JavaScript
let car1 = 
{
    make: "Bmw",
    model: "320d",
    maxSpeed: "220km/h"
};

let car2 = 
{
    make: "Citroën",
    model: "C4",
    maxSpeed: "180km/h"
};

let person1 = 
{
    name: "Marc",
    age: "24",
    carOwned: car1
};

console.log(person1.carsOwned.make);
```

On peut même aller plus loin en assignant plusieurs voitures à notre cher ami Marc à l'aide des tableaux:

```JavaScript
let person1 = 
{
    name: "Marc",
    age: "24",
    carsOwned: [car1, car2]
};

//retourne "Bmw"
console.log(person1.carsOwned[0].make);

//retourne "Citroën
console.log(person1.carsOwned[1].make);
```