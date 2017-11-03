# Ajax

## Kesako

Ajax ou Asyncrhonous Javascript and XML est un terme utilisé pour designer la communication entre une application javascript et un serveur.

Dans ce chapitre vous allez apprendre à faire interagir votre page web avec un serveur pour récuperer des informations dynamiquement.

En gros, c'est ce qui vous permet de récuperer des informations depuis d'autres sites.

## But .. How ?

Tout ceci va se faire grâce au protocole HTTP dont on vous a parlé le premier jour.

![http://www.omnisecu.com/images/tcpip/http-request-response.jpg](http://www.omnisecu.com/images/tcpip/http-request-response.jpg)

En somme, le client va faire une requête à un serveur et le serveur va lui renvoyer les donneés que les client demandait.

Par exemple si le client envoie au client:
**GET /dogs**

Le serveur va lui renvoyer les données qu'il a pour les chiens.

## En code

```JavaScript
function handleJSON(response){
  // response sera un objet Javascript (un JSON)
  // que l'on pourra utiliser pour afficher informations
  // Si par exemple data ressemble à ceci:
  // {dogs: ["woof", "waf"]}
  const list = $('#list');
  for(let dog of data.dogs){
    const newLi = $('<li>');
    newLi.text(dog);
    list.append(newLi);
  }
}

$.getJSON('http://mon-serveur.com/dogs', handleJSON);
```
