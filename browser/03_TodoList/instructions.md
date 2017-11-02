# TODO LIST

## Add Todo

Quand un utilisateur clique sur Add Todo, ajoutez dans **#list** une nouvelle li.

Votre li doit ressembler à ceci

```html
<li class="active">todo<button class="remove-todo">x</button></li>
```

Attention, une todo ne peut pas être vide

Bonus: Ajoutez des todos quand on appuie sur enter
## Todo counter

Tenez à jour le compteur de todos au fur et à mesure que vous ajoutez des todos.
Attention, vous ne devez compter que les todos actives

## Complete Todo

Quand un utilisateur clique sur une todo, passez là à completed si elle est active est à active si elle est completed.

## Remove todo

Quand un utilisateur clique sur le boutton x sur une todo, supprimez celle-ci.

Pour se faire vous aurez besoin de trouver le parent du boutton, vous pouvez procéder comme suit:

```JavaScript
function handler(){
  // Parent de la todo
  const parent = $(this).parent();
}
$('.remove-todo').click(handler);
```

## Remove completed

Implementez la fonction qui supprime toutes les todos quand on clique sur remove completed

## Filtres

Faites fonctionner les filtres **see all** **see actives** **see completed**
