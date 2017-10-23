/**
 * On vous a dit que les fonctions permettent d'écrire du code ré-utilisable.
 * Casser au maximum le code ci-dessous en fonctions
 **/

 function tirets(){
     console.log("------------------------------------");
 }

 function hello(name){
     console.log(`Bonjour, ${name}`);
 }

 function displayHello(name){
    tirets();
    hello(name);
    tirets();
 }

 displayHello("Bob");
 displayHello("Marc");
 displayHello("Max");
 displayHello("Arnold"); 

// console.log('----------------------------');
// console.log('Bonjour, Bob');
// console.log('----------------------------');

// console.log('----------------------------');
// console.log('Bonjour, Patrick');
// console.log('----------------------------');

// console.log('----------------------------');
// console.log('Bonjour, Victoria');
// console.log('----------------------------');

// console.log('----------------------------');
// console.log('Bonjour, Richard');
// console.log('----------------------------');