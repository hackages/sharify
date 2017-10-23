// Il existe deux façons de créer une string
// en utilisant des " (doubles quotes) ou en utilisant des '
// Il est possible "d'échaper" des caractères en utilisant un \ (backslash)
// Par exemple si je veux afficher Il s'appelle en utilisant des ' il faut "escape" le '

// éxecuter ce fichier et essayer de fixer les erreurs pour pouvoir le faire tourner
let hello = "Salut je m'appelle Antonio";
console.log(hello);

let welcome = "welcome";
let name = "Antonio";

// Il est également possible d'ajouter des strings entre elles
// Dans le console log suivant affichez "welcome, Antonio!"

const solution1 = welcome + ", " + name + "!";
const solution2 = `${welcome}, ${name}!`;

console.log(solution1, solution2);