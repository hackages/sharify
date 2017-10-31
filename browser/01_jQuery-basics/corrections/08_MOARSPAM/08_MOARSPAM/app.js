/**
 *  <p><button id="add-btn">ADD SPAM</button></p>
    <p><button id="select-btn">SELECT ALL SPAM</button></p>
    <p><button id="hide-btn">HIDE ALL SPAM</button></p>
    <p><button id="delete-btn">
 */

updateSpam();

const root = $('#root');
let border = false;

function addSpam(){
  const newParagraph = $('<p>');
  newParagraph
    .addClass('spam')
    .text(genSpam());
  root.append(newParagraph);
  if(border){
    newParagraph.addClass('border');
  }
  updateSpam();
}

function selectSpam(){
  const spams = $('.spam');
  spams.toggleClass('border');
  border = !border;
  console.log(border);
}


function hideSpam(){
  root.toggle();
}

function deleteSpamz(){
  $('.spam').remove();
  updateSpam();
}

function updateSpam(){
  console.log('ive been called!');
  $('#spam-counter').text(countSpam());
}

function countSpam(){
  return $('.spam').length;
}

$('#add-btn').click(addSpam);
$('#select-btn').click(selectSpam);
$('#hide-btn').click(hideSpam);
$('#delete-btn').click(deleteSpamz);

function handleClickz(){
  const self = $(this);
  self.toggleClass('selected');
}

$('.spam').click(handleClickz);
