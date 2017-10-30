# jQuery

## Kesako

jQuery est une librairie qui permet de très facilement travailler avec le DOM (Document Object Model).

Dans ce premier chapitre nous allons voir comment nous pouvons utiliser jQuery pour travailler sur nos projets webs.

## Sélectionner des éléments avec jQuery

En jQuery on peut très facilement sélectionner des éléments en utilisant des sélecteurs CSS.

Par tag HTML:

```JavaScript
const paragraphs = $('p');
```

Par id:

```JavaScript
const main = $('#main');
```

Par classe:

```JavaScript
const actives = $('.actives');
```

## Modifier des éléments en utilisant jQuery

Une fois qu'on a sélectionné un élément en jQuery on peut facilement le modifier, que ça soit sont html ou sont style

### Modifier les classes d'un élément

Il est par exemple possible de rajouter des classes à un élément après l'avoir sélectionné:

```JavaScript
$('#main').addClass('le nom de la classe');
```

### Modifier directement le style d'un élément

```JavaScript
$('.text').css('color', 'green');
```

### Modifier le contenu HTML d'un élément

```JavaScript
$('#list').html('<li>Hello, world!</li>');
```

### Modifier le texte d'un élément HTML

```JavaScript
$('#monTexte').text('Nouveau texte');
```

### Ajouter du contenu à la fin d'un élément HTML

```JavaScript
$('#text').append('world!');
```

### Montrer/Cacher des éléments

```JavaScript
const el = $('#votreElement');
el.hide();
el.show();
```

### Supprimer des éléments

```JavaScript
$('div').remove(); // Supprime toutes les divs sur une page
```

## Créer des éléments en utilisant jQuery

Si au lieu de passer un sélecteur CSS on lui donne un tag HTML, jQuery va nous retourner un élément HTML sur lequel on peut ensuite travailler

Par exemple:

```JavaScript
const newP = $('<p>');
newDiv.text('Lalala this is a test');

// On peut ensuite insérer cet élément dans le DOM
$('body').apppend(newP);
```

### Exemple: création d'une liste de prénoms avec jQuery

```JavaScript
// Liste de prénoms que l'on veut afficher
const names = ["Lola", "Paul", "Nikita"];

// L'élément de la page dans lequel on va insérer notre liste
const main = $('#main');

// Création d'un élémement <ul></ul>
const list = $('<ul>');
for(let name of names){
  // On crée un nouveau <li></li> à chaque itération de la boucle
  const tempUl = $('<li>');
  // On insére le nom en tant que texte du <li>
  tempUl.text(name);
}

// Quand la boucle est finie on ajoute la liste dans <div id="main"></div>
main.html(list);
```

## La gestion des évenements

Les évenements sont des choses sur lesquelles vous pouvez réagir dans votre code suites aux actions d'un utilisateur, lorsqu'il passe sa souris sur un élément (hover), lorsqu'il clique quelque part, lorsqu'il resize son navigateur etc.

Il est très facile en jQuery d'intercepter ceux-ci

```JavaScript
// On récupère un élément
const myButton = $('#myButton');

// On crée une fonction qui sera appellée quand on clique sur notre bouton
function handle(event){
  // Notre function reçoit "event" qui est l'évenement
}

// On "attache" notre fonction aux clicks du bouttons
myButton.on('click', handle);

// Il existe également un raccourci pour chaque évenement
myButton.click(handle);
```

### Empêcher un événement de se produire

Il est possible à l'aide de jQuery d'empêcher un événement de se produire, pour se faire, dans notre function qui reçoit l'objet event on va appeler event.preventDefaul();

Imaginons que nous avons le lien suivant:

```HTML
<a id="myLink" href="https://google.com">Aller sur Google</a>
```

```JavaScript
// On crée une fonction qui sera appellée aux clicks sur notre lien
function preventNavigation(event){
  // On empêche la navigation vers le lien
  event.preventDefault();
}

// On attache notre function aux clicks du lien
$('#myLink').on('click', preventNavigation);
// Ou le raccourci
$('#myLink').click(preventNavigation);
```
