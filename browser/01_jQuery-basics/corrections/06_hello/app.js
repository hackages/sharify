let clicks = 0;

// Compléter la function ci-dessous pour correspondre à l'énnoncé
function handleClicks(event){
 alert('Le compteur vaut ' + clicks);
 clicks++;
}

// "Attacher" votre function aux clicks du boutton
$('#very-secret-button')
  .click(handleClicks);