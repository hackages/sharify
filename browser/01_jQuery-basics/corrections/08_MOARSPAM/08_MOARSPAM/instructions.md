# 07 MOAR SPAMZ

Dans cet exercice votre but est de génerer du SPAM sur la page.

## ADD SPAM

Quand l'utilisateur clique sur le boutton ADD SPAM vous devez génerer du nouveau spam sur la page, pour ce faire, créez un élement **<p class="spam"></p>** et insérez le dans **<div id="root"></div>**

Vous pouvez récuperer du texte à spammer à l'aide de la fonction genSpam();

## SELECT ALL SPAMZ

Quand l'utilisateur clique sur le boutton SELECT ALL SPAM vous devez ajouter une bordure autour de chaque spam.

Bonus: Si l'utilisateur clique plusieurs fois, afficher/cacher la bordure

## HIDE SPAMZ

Quand l'utilisateur clique sur ce boutton, cachez tout le spam.

Bonus: Si l'utilisateur clique plusieurs fois, afficher/cacher le spam

[http://api.jquery.com/toggle/](http://api.jquery.com/toggle/)

## DELETE SPAMZ

Quand l'utilisateur clique sur ce boutton, supprimez tout le spam présent sur la page

## SPAMZ COUNTER

Tenez à jour ce compteur quand l'utilisateur ajoute ou supprime du contenu.

Pour connaître le nombre d'élements présents sur une page pour un certain tag, utilisez .length après avoir sélectionné quelque chose en jQuery

Exemple:

```JavaScript
const titles = $('h1').length;
console.log("There's" + titles + "on this page");
```

## HANDLE CLICKZ

Quand un utilisateur clique sur l'un des spams, changer la couleur de son background.

Pour ceci vous aurez besoin d'un petit peu de théorie en plus.
En jQuery, quand vous donnez une fonction à un élément et que vous voulez récuperer ce même élement dans votre fonction vous devez faire comme tel:

```JavaScript
// On sélectionne tous les bouttons sur la page
const buttons = $('button');

// On crée une fonction pour gérer les clicks
function handleClicks(event){
  const self = $(this); // <-- récupère l'élément au moment où la fonction est appellée.
  self.remove(); // Supprime le boutton 
}

// On attache notre fonction aux clicks
buttons.click(handleClicks);
```

Tip: utilisez toggleClass pour lui ajouter/retirer une classe css