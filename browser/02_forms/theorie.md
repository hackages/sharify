# Gérer des formulaires avec jQuery

Les formulaires sont une grandes parties de ce qui compose internet.

Ils permettent de se logguer, de créer un compte, d'écrire des mails, de changer ses informations sur un site, de créer un poste sur facebook, de chercher des informations sur google, bref, ils sont partout.

Dans ce chapitre nous allons voir comment nous pouvons les gérer à l'aide de jQuery.

## Récuperer la valeur d'un input

Pour l'html suivant:

```Html
<form id="my-form">
  <input type="text" name="age" placeholder="age" />
</form>
```

Via son ID:

```JavaScript
const input = $('#input-age');

const value = input.val();
```

Via la propriété name:

```JavaScript
const input = $('input[name=age]');

const value = input.val();
```

Via le formulaire:

```JavaScript
const form = $('#my-form');
const age = form.find('[name=age]');
const value = input.val();
```

## Empêcher la soumission d'un formulaire

Comme on l'a vu dans le chapitre précedent il est possible d'empêcher un événement via event.preventDefault();

Celà veut-dire qu'il est possible d'intercepter et de prévoir la soumission d'un formulaire si on pense que les données sont incorrectes

Exemple:

```JavaScript
// On crée une fonction qui récupère l'évenement submit
const handleSubmit(event){
  // On l'empêche
  event.preventDefault();
}

// On attache notre fonction au formulaire
$('#my-form').on('submit', handleSubmit);
// Ou le raccourci
$('#my-form').submit(handleSubmit);
``` 