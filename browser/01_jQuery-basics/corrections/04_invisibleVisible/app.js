function handler(){
  $('#hello').toggle();
}

setInterval(handler, 5000);

$('#toggle-btn').click(handler);
