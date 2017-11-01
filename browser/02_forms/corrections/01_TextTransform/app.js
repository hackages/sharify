const inputField = $('#text-user');
const textParagraph = $('#text');

function handleInput(){
  const value = inputField.val();
  textParagraph.text(value.toUpperCase());
};

inputField.on('input', handleInput);