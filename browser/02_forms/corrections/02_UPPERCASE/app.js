const textField = $('input[name=texte]');
const select = $('select[name=option]');
const paragraph = $('#text');

/**function upperCase(chaine){
  return chaine.toUpperCase();
}

function lowerCase(chaine){
  return chaine.toLowerCase();
}

function reverse(chaine){
  return chaine.split("").reverse().join("");
}

function updateText(txt){
  paragraph.text(txt);
}

function handleChange(){
  const value = textField.val();
  const option = select.val();

  switch(option){
    case 'uppercase': {
      console.log('helloooo')
      const newValue = upperCase(value);
      updateText(newValue);
      break;
    }
    case 'lowercase': {
      const newValue = lowerCase(value);
      updateText(newValue);
      break;
    }
    case 'reverse': {
      const newValue = reverse(value);
      updateText(newValue);
      break;
    }
  }
}**/

function lowerCase(){
  paragraph.text(textField.val().toLowerCase());
}

function upperCase(){
  paragraph.text(textField.val().toUpperCase());
}

function reverse(){
  paragraph.text(textField.val().split("").reverse().join(""));
}
function handleChange(){
  const option = select.val();
  switch(option){
    case 'uppercase': {
      upperCase();
      break;
    }
    case 'lowercase': {
      lowerCase();
      break;
    }
    case 'reverse': {
      reverse();
      break;
    }
  }
}


textField.on('input', handleChange);
select.change(handleChange);