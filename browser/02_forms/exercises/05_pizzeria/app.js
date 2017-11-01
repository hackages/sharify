// On sélectionne l'élement avec l'id pate
const pate = $('#pate');

// On crée une fonction qui sera utilisée pour les changements sur le select #pate
function pateChanged(event){
  // On récupère la value et on la transforme en nombre
  const prix = Number(pate.val());

  // On affiche le prix qui est maintenant un nombre
  console.log(prix);
}

// On attache notre function à l'event "change" du select
pate.on('change', pateChanged);
