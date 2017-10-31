let border = false;
let hidden = true;

function getSpams(){
  return $('.spam');
}

function refreshCounter(){
  const compteur = $('#spam-counter');
  const spams = getSpams().length;
  compteur.text(spams);
}

function deleteSpams(){
  const spams = getSpams();
  spams.remove();
  refreshCounter();
}

function toggle(){
  border = !border;
  const spams = getSpams();
  spams.toggleClass('border');
}

function hide(){
  hidden = !hidden;
  getSpams().toggle();
}

function addSpam(){
  const newSpam = $('<p>').addClass('spam');
  newSpam.text(genSpam());
  $('#root').append(newSpam);
  newSpam.toggle(hidden);
  newSpam.toggleClass('border', border);
  refreshCounter();
  newSpam.click(handleClick);
}

function handleClick(){
  $(this).toggleClass('red-background');
}

getSpams().click(handleClick);

$('#delete-btn').click(deleteSpams);
$('#add-btn').click(addSpam);
$('#select-btn').click(toggle);
$('#hide-btn').click(hide);
refreshCounter();